using HMS_BackEnd.DTO;
using HMS_BackEnd.Models;
using HMS_BackEnd.UnitOfWork;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace HMS_BackEnd.Controllers
{
    public class AccountController : BaseController
    {
        private readonly IUnitOfWork uow;

        public AccountController(IUnitOfWork uow)
        {
            this.uow = uow;
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginReqDTO loginReq)
        {
            var user = await uow.UserRepository.Authenticate(loginReq.UserName, loginReq.Password);

            if (user == null)
            {
                return Unauthorized();
            }

            var loginRes = new LoginResDTO();
            loginRes.UserName = user.userName;
            loginRes.Token = CreateJWT(user);

            return Ok(loginRes);
        }

        private string CreateJWT(User user)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("This is My Secret Key"));

            var claims = new Claim[]
            {
                new Claim(ClaimTypes.Name,user.userName),
                new Claim(ClaimTypes.NameIdentifier, user.UserId.ToString())
            };

            var signingCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddMinutes(30),
                SigningCredentials = signingCredentials
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
}
