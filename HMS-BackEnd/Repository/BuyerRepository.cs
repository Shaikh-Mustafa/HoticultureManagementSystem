using AutoMapper;
using HMS_BackEnd.Data;
using HMS_BackEnd.Interface;
using HMS_BackEnd.Models;

namespace HMS_BackEnd.Repository
{
    public class BuyerRepository : IBuyerRepository
    {
        private readonly DataContext dc;
        private readonly IMapper mapper;

        public BuyerRepository(DataContext dc, IMapper mapper)
        {
            this.dc = dc;
            this.mapper = mapper;
        }

        public async Task<buyer> addBuyer(buyer b)
        {
            this.dc.buyers.Add(b);

            return b;
        }

        public async Task<IEnumerable<buyer>> getAllBuyers()
        {
           var buyers = dc.buyers.ToList();

            return buyers;
        }

        public async Task<buyer> getBuyerById(int id)
        {
            var b = await dc.buyers.FindAsync(id);

            return b;
        }

        public async Task<buyer> removeBuyer(int id)
        {
            var b = await dc.buyers.FindAsync(id);
            dc.buyers.Remove(b);

            return b;
        }
    }
}
