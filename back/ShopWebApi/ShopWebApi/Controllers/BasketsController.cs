using BussinessLogic.DTOs.Basket;
using BussinessLogic.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ShopWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BasketsController : ControllerBase
    {
        private readonly IBasketService service;

        public BasketsController(IBasketService service)
        {
            this.service = service;
        }

        [HttpGet("{userId}")]
        public async Task<IActionResult> Get([FromRoute]int userId)
        {
            try
            {
                var basket = await service.Get(userId);
                return Ok(basket);
            }
            catch (Exception ex)
            {
                return BadRequest(new { error = ex.Message });
            }
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody]AddRemoveDto model)
        {
            try
            {
                await service.AddProduct(model.UserId, model.ProductId);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { error = ex.Message });
            }
        }

        [HttpDelete]
        public async Task<IActionResult> Remove([FromBody]AddRemoveDto model)
        {
            try
            {
                await service.RemoveProduct(model.UserId, model.ProductId);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { error = ex.Message });
            }
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody]BasketUpdateDto model)
        {
            try
            {
                await service.Update(model);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { error = ex.Message });
            }
        }

        [HttpPost("product")]
        public async Task<IActionResult> IsProductInBasket(AddRemoveDto model)
        {
            try
            {
                var isInBasket = await service.IsProductInBasket(model.UserId, model.ProductId);
                return Ok(isInBasket);
            }
            catch (Exception ex)
            {
                return BadRequest(new { error = ex.Message });
            }
        }
    }
}
