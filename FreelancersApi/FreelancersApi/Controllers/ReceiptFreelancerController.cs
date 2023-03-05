using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FreelancersApi.DBContext.Interface;
using FreelancersApi.DBEntity.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace FreelancersApi.Controllers
{
    [ApiController]
    [Route("api/recibo")]
    public class ReceiptFreelancerController : Controller
    {
        protected readonly IReceiptFreelancerRepository _receiptFreelancerRepository;

        public ReceiptFreelancerController(IReceiptFreelancerRepository receiptFreelancerRepository)
        {
            _receiptFreelancerRepository = receiptFreelancerRepository;
        }

        /// <summary>
        /// lista
        /// </summary>
        [HttpGet]
        [Produces("application/json")]
        [Route("lista")]
        public ActionResult List()
        {
            var list = _receiptFreelancerRepository.list();
            return Json(list);
        }

        /// <summary>
        /// crear
        /// </summary>
        [HttpPost]
        [Produces("application/json")]
        [Route("crear")]
        public ActionResult Create([FromBody] EntityReceiptFreelancer req)
        {
            var list = _receiptFreelancerRepository.create(req);
            return Json(list);
        }

    }
}
