using System.ComponentModel.DataAnnotations;

namespace HMS_BackEnd.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        public string userType { get; set; }
        public string userName { get; set; }
        public string password { get; set; }
        public DateTime CreatedAt { get; set; }
        public int CreatedBy { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int UpdatedBy { get; set; }
    }
}
