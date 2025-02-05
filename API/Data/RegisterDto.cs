using System.ComponentModel.DataAnnotations;

namespace API.Data
{
    public class RegisterDto
    {
        [Required]
        public required string UserName { get; set; }
        [Required]
        public required string Password { get; set; }
    }
}