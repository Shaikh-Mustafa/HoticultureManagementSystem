using HMS_BackEnd.Models;
using HMS_BackEnd.UnitOfWork;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HMS_BackEnd.Controllers
{
    public class UserController : BaseController
    {
        private readonly IUnitOfWork uow;

        public UserController(IUnitOfWork uow)
        {
            this.uow = uow;
        }

        
        [HttpGet("getAllUsers")]
        public async Task<IActionResult> getUsers()
        {
            try
            {
            var users = await uow.UserRepository.GetAllUsers();

            return Ok(users);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("CreateUser")]
        public async Task<IActionResult> CreateUser(User new_user)
        {
            try
            {
                if (new_user != null)
                {
                    await this.uow.UserRepository.CreateUser(new_user);
                    await this.uow.SaveAsync();
                    return Ok("User Created Successfully!!");
                }
                else
                {
                    return BadRequest("New User is Null !");
                }
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
