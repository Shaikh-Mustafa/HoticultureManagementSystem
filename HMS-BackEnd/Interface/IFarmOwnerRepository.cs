using HMS_BackEnd.Models;

namespace HMS_BackEnd.Interface
{
    public interface IFarmOwnerRepository
    {
        Task<IEnumerable<FarmOwner>> getAllFarmOwners();
        Task<FarmOwner> getFarmOwnerById(int id);
        Task<FarmOwner> addFarmOwner(FarmOwner farmOwner);
        Task<FarmOwner> removeFarmOwner(int id);
    }
}
