namespace HMS_BackEnd.DTO
{
    public class StockDTO
    {
        public int StockId { get; set; }
        public string StockName { get; set; }
        public string StockDescription { get; set; }
        public int StockType { get; set; }
        public int StockPrice { get; set; }
        public bool IsAvailalble { get; set; }
    }
}
