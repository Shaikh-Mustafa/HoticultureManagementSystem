using HMS_BackEnd.Data;
using HMS_BackEnd.Interface;
using HMS_BackEnd.Repository;

namespace HMS_BackEnd.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DataContext dc;
        public UnitOfWork(DataContext dc)
        {
            this.dc = dc;
        }

        public IUserRepository UserRepository => new UserRepository(dc);



        public async Task<bool> SaveAsync()
        {
            return await dc.SaveChangesAsync() > 0;
        }
    }
}
