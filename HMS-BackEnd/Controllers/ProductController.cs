using HMS_BackEnd.DTO;
using HMS_BackEnd.UnitOfWork;
using Microsoft.AspNetCore.Mvc;

namespace HMS_BackEnd.Controllers
{
    public class ProductController : BaseController
    {
        private readonly IUnitOfWork uow;

        public ProductController(IUnitOfWork uow)
        {
            this.uow = uow;
        }


        
        [HttpGet("getAllProducts")]
        public async Task<ActionResult> getAllProducts()
        {
            var products = this.uow.ProductRepository.getAllProducts();

            return Ok(products);
        }

        [HttpGet("GetProductById/id")]
        public async Task<ActionResult> getProductById(int id)
        {
            var product = this.uow.ProductRepository.getProductById(id);

            return Ok(product);
        }

        [HttpPost("addProduct")]
        public async Task<ActionResult> addProduct(ProductDTO productdto)
        {
            try
            {
            var product = await this.uow.ProductRepository.addProduct(productdto);

            return Ok(product);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("delete/id")]
        public async Task<ActionResult> deleteProduct(int id)
        {
            var product = this.uow.ProductRepository.deleteProduct(id);

            return Ok(product);
        }
    }
}
