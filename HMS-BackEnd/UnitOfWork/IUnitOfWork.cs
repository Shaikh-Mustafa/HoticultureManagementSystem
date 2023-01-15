using HMS_BackEnd.Interface;

namespace HMS_BackEnd.UnitOfWork
{
    public interface IUnitOfWork
    {
        IUserRepository UserRepository { get; }

        Task<bool> SaveAsync();
    }
}
