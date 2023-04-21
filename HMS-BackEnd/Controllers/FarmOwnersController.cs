using HMS_BackEnd.Models;
using HMS_BackEnd.UnitOfWork;
using Microsoft.AspNetCore.Mvc;

namespace HMS_BackEnd.Controllers
{
    public class FarmOwnersController : BaseController
    {
        private readonly IUnitOfWork uow;

        public FarmOwnersController(IUnitOfWork uow)
        {
            this.uow = uow;
        }

        [HttpGet("getAllFarmOwners")]
        public async Task<ActionResult<IEnumerable<FarmOwner>>> getAllFarmOwners()
        {
          var owners = await uow.FarmOwnerRepository.getAllFarmOwners();

            return Ok(owners);
        }

        [HttpPost("addFarmOwners")]
        public async Task<ActionResult> addFarmOwner(FarmOwner fm)
        {
            var owner = await uow.FarmOwnerRepository.addFarmOwner(fm);

            return Ok(owner);
        }
    }
}
