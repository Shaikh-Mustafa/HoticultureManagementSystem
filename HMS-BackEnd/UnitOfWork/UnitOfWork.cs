using AutoMapper;
using HMS_BackEnd.Data;
using HMS_BackEnd.Interface;
using HMS_BackEnd.Repository;

namespace HMS_BackEnd.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DataContext dc;
        private readonly IMapper mapper;

        public UnitOfWork(DataContext dc, IMapper mapper)
        {
            this.dc = dc;
            this.mapper = mapper;
        }

        public IUserRepository UserRepository => new UserRepository(dc);

        public IProductRepository ProductRepository => new ProductRepository(dc, mapper);

        public IStockRepository StockRepository => new StockRepository(dc, mapper);



        public async Task<bool> SaveAsync()
        {
            return await dc.SaveChangesAsync() > 0;
        }
    }
}
