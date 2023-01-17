using AutoMapper;
using HMS_BackEnd.Data;
using HMS_BackEnd.DTO;
using HMS_BackEnd.Interface;
using HMS_BackEnd.Models;

namespace HMS_BackEnd.Repository
{
    public class ProductRepository : IProductRepository
    {
        private readonly DataContext dc;
        private readonly IMapper mapper;

        public ProductRepository(DataContext dc, IMapper mapper)
        {
            this.dc = dc;
            this.mapper = mapper;
        }
        public async Task<ProductDTO> addProduct(ProductDTO product)
        {
            Product p = mapper.Map<Product>(product);

            await dc.Products.AddAsync(p);

            await dc.SaveChangesAsync();

            return product;
        }

        public async Task<ProductDTO> deleteProduct(int id)
        {
            var p = await dc.Products.FindAsync(id);

            dc.Products.Remove(p);

            var deletedProduct = mapper.Map<ProductDTO>(p);

            return deletedProduct;
            
        }

        public List<ProductDTO> getAllProducts()
        {
            var products = dc.Products.ToList();

            var productsDTO = mapper.Map<List<ProductDTO>>(products);

            return productsDTO;
        }

        public async Task<ProductDTO> getProductById(int id)
        {
            var product = await dc.Products.FindAsync(id);

            var productDTO = mapper.Map<ProductDTO>(product);

            return productDTO;

        }
    }
}
