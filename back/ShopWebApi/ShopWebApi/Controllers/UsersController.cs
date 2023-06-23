using BussinessLogic.DTOs.Identity;
using BussinessLogic.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ShopWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService service;

        public UsersController(IUserService service)
        {
            this.service = service;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get([FromRoute]int id)
        {
            try
            {
                var user = await service.GetUserAsync(id);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest( ex.ToString() );
            }
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody]UserRegisterDto model)
        {
            try
            {
                await service.RegisterAsync(model);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { error = ex.Message });
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody]UserLoginDto model)
        {
            try
            {
                var user = await service.LoginAsync(model);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(new { error = ex.Message });
            }
        }
    }
}
