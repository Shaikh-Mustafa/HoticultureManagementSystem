namespace HMS_BackEnd.DTO
{
    public class ProductDTO
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public int ProductCategoryId { get; set; }
        public int ProductPrice { get; set; }
        public int IsAvailable { get; set; }
    }
}
