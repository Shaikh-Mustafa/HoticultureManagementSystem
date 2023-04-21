using HMS_BackEnd.Models;

namespace HMS_BackEnd.Interface
{
    public interface IBuyerRepository
    {
        Task<IEnumerable<buyer>> getAllBuyers();
        Task<buyer> getBuyerById(int id);
        Task<buyer> addBuyer(buyer buyer);
        Task<buyer> removeBuyer(int id);
    }
}
