using HMS_BackEnd.Data;
using HMS_BackEnd.DTO;
using HMS_BackEnd.Interface;
using HMS_BackEnd.Models;
using Microsoft.EntityFrameworkCore;

namespace HMS_BackEnd.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext dc;

        public UserRepository(DataContext dc)
        {
            this.dc = dc;
        }


        public async Task<UserDTO> addUser(UserDTO userDTO)
        {
            throw new NotImplementedException();
        }

        public Task<UserDTO> deleteUser(int id)
        {
            throw new NotImplementedException();
        }

        public Task<UserDTO> getUserById(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<User>> getUsers()
        {
            return await dc.Users.ToListAsync();
        }
    }
}
