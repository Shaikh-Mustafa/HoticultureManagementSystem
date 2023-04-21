using HMS_BackEnd.DTO;
using HMS_BackEnd.UnitOfWork;
using Microsoft.AspNetCore.Mvc;

namespace HMS_BackEnd.Controllers
{
    public class StockController : Controller
    {
        private readonly IUnitOfWork uow;

        public StockController(IUnitOfWork uow)
        {
            this.uow = uow;
        }



        [HttpGet("getAllStocks")]
        public async Task<IActionResult> getAllStocks()
        {
            var stocks = this.uow.StockRepository.getAllStocks();

            return Ok(stocks);
        }

        [HttpGet("GetStockById/id")]
        public async Task<IActionResult> getStockById(int id)
        {
            var stock = this.uow.StockRepository.getStockById(id);

            return Ok(stock);
        }

        [HttpPost("addStock")]
        public async Task<IActionResult> addProduct(StockDTO stockdto)
        {
            try
            {
                var stock = await this.uow.StockRepository.addStock(stockdto);

                return Ok(stock);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("delete/id")]
        public async Task<IActionResult> deleteStock(int id)
        {
            var stock = this.uow.StockRepository.deleteStock(id);

            return Ok(stock);
        }
    }
}
