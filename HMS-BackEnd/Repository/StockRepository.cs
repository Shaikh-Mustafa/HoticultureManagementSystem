using AutoMapper;
using HMS_BackEnd.Data;
using HMS_BackEnd.DTO;
using HMS_BackEnd.Interface;
using HMS_BackEnd.Models;

namespace HMS_BackEnd.Repository
{
    public class StockRepository : IStockRepository
    {
        private readonly DataContext dc;
        private readonly IMapper mapper;

        public StockRepository(DataContext dc, IMapper mapper)
        {
            this.dc = dc;
            this.mapper = mapper;
        }

        public async Task<StockDTO> addStock(StockDTO stock)
        {
            try
            {

            Stock p = mapper.Map<Stock>(stock);

            await dc.Stocks.AddAsync(p);

            await dc.SaveChangesAsync();

            return stock;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public async Task<StockDTO> deleteStock(int id)
        {
            var p = await dc.Stocks.FindAsync(id);

            dc.Stocks.Remove(p);

            var deletedStock = mapper.Map<StockDTO>(p);

            return deletedStock;
        }

        public List<StockDTO> getAllStocks()
        {
            var stocks = dc.Stocks.ToList();

            var stocksDTO = mapper.Map<List<StockDTO>>(stocks);

            return stocksDTO;
        }

        public async Task<StockDTO> getStockById(int id)
        {
            var stock = await dc.Stocks.FindAsync(id);

            var stockDTO = mapper.Map<StockDTO>(stock);

            return stockDTO;
        }
    }
}
