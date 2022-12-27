using HMS_BackEnd.UnitOfWork;
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

        [HttpGet("get")]
        public async Task<IActionResult> getUsers()
        {
            try
            {
            var users = await uow.UserRepository.getUsers();

            return Ok(users);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
