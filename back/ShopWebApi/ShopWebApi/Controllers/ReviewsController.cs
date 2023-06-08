using BussinessLogic.DTOs.Review;
using BussinessLogic.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq.Expressions;

namespace ShopWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewsController : ControllerBase
    {
        private readonly IReviewService service;

        public ReviewsController(IReviewService service)
        {
            this.service = service;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get([FromRoute]int id)
        {
            try
            {
                var review = await service.GetAsync(id);
                return Ok(review);
            }
            catch (Exception ex)
            {
                return BadRequest(new { error = ex.Message });
            }
        }

        [HttpGet("product/{id}")]
        public async Task<IActionResult> GetByProduct([FromRoute]int productId)
        {
            try
            {
                var reviews = await service.GetByProductAsync(productId);
                return Ok(reviews);
            }
            catch (Exception ex)
            {
                return BadRequest(new { error = ex.Message });
            }
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody]ReviewCreateDto model)
        {
            try
            {
                var review = await service.CreateAsync(model);
                return Ok(review);
            }
            catch (Exception ex)
            {
                return BadRequest(new { error = ex.Message });
            }
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody]ReviewUpdateDto model)
        {
            try
            {
                var review = await service.UpdateAsync(model);
                return Ok(review);
            }
            catch (Exception ex)
            {
                return BadRequest(new { error = ex.Message });
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute]int id)
        {
            try
            {
                await service.DeleteAsync(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { error = ex.Message });
            }
        }
    }
}
