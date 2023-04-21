using AutoMapper;
using HMS_BackEnd.Data;
using HMS_BackEnd.Interface;
using HMS_BackEnd.Models;

namespace HMS_BackEnd.Repository
{
    public class FarmOwnerRepository : IFarmOwnerRepository
    {
        private readonly DataContext dc;
        private readonly IMapper mapper;

        public FarmOwnerRepository(DataContext dc, IMapper mapper)
        {
            this.dc = dc;
            this.mapper = mapper;
        }


        public async Task<FarmOwner> addFarmOwner(FarmOwner farmOwner)
        {
             this.dc.Add(farmOwner);

            return farmOwner;
        }

        public async Task<IEnumerable<FarmOwner>> getAllFarmOwners()
        {
            var farmOwners =  dc.FarmOwners.ToList();

            return farmOwners;
        }

        public async Task<FarmOwner> getFarmOwnerById(int id)
        {
            var farmOwner = await dc.FarmOwners.FindAsync(id);

            return farmOwner;
        }

        public async Task<FarmOwner> removeFarmOwner(int id)
        {
            var farmOwner = await dc.FarmOwners.FindAsync(id);

            this.dc.Remove(farmOwner);

            return farmOwner;
        }
    }
}
