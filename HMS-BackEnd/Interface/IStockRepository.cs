using AutoMapper;
using HMS_BackEnd.Data;
using HMS_BackEnd.DTO;
using HMS_BackEnd.Models;

namespace HMS_BackEnd.Interface
{
    public interface IStockRepository
    {
        List<StockDTO> getAllStocks();
        
        Task<StockDTO> getStockById(int id);

        Task<StockDTO> deleteStock(int id);

        Task<StockDTO> addStock(StockDTO stock);
    }
}
