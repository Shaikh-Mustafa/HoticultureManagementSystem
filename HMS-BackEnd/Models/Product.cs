using System.ComponentModel.DataAnnotations;

namespace HMS_BackEnd.Models
{
    public class Product
    {
        [Key]
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public int ProductCategoryId { get; set; }
        public int ProductPrice { get; set; }
        public int IsAvailable { get; set; }
        public DateTime CreatedOn { get; set; }
        public int CreatedBy { get; set; }
        public DateTime UpdatedOn { get; set; }
        public int UpdatedBy { get; set; }
    }
}
