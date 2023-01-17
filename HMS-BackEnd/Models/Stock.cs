namespace HMS_BackEnd.Models
{
    public class Stock
    {
        public int StockId  { get; set; }
        public string StockName { get; set;}
        public string StockDescription { get; set;}
        public int StockType { get; set;}
        public int StockPrice { get; set;}
        public bool IsAvailalble { get; set; }
        public DateTime CreatedOn { get; set; }
        public int CreatedBy { get; set; }
        public DateTime UpdatedOn { get; set; }
        public int UpdatedBy { get; set; }      
    }
}
