using HMS_BackEnd.Models;
using HMS_BackEnd.UnitOfWork;
using Microsoft.AspNetCore.Mvc;

namespace HMS_BackEnd.Controllers
{
    public class BuyerController : BaseController
    {
        private readonly IUnitOfWork uow;

        public BuyerController(IUnitOfWork uow)
        {
            this.uow = uow;
        }

        [HttpGet("getAllBuyers")]
        public async Task<ActionResult<IEnumerable<buyer>>> getAllBuyers()
        {
            var buyers = await uow.BuyerRepository.getAllBuyers();

            return Ok(buyers);
        }

        [HttpPost("addBuyers")]
        public async Task<ActionResult> addFarmOwner(buyer b)
        {
            var buyers = await uow.BuyerRepository.addBuyer(b);

            return Ok(buyers);
        }

    }
}
