using HMS_BackEnd.DTO;
using HMS_BackEnd.Models;

namespace HMS_BackEnd.Interface
{
    public interface IUserRepository
    {
        Task<IEnumerable<User>> getUsers();
        Task<UserDTO> getUserById(int id);
        Task<UserDTO> addUser(UserDTO userDTO);
        Task<UserDTO> deleteUser(int id); 
    }
}
