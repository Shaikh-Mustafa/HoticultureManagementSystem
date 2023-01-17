using HMS_BackEnd.DTO;

namespace HMS_BackEnd.Interface
{
    public interface IProductRepository
    {
        List<ProductDTO> getAllProducts ();
        Task<ProductDTO> getProductById (int id);
        Task<ProductDTO> addProduct(ProductDTO product);
        Task<ProductDTO> deleteProduct(int id);
        
    }
}
