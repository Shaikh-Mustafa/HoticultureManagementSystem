using HMS_BackEnd.DTO;
using HMS_BackEnd.Models;

namespace HMS_BackEnd.Interface
{
    public interface IUserRepository
    {

        Task<User> Authenticate(string userName, string password);
        Task<List<User>> GetAllUsers();
        Task<User> CreateUser(User user);
    }
}
