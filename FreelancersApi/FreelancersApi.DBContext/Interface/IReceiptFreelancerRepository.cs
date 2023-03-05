using FreelancersApi.DBEntity.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace FreelancersApi.DBContext.Interface
{
    public interface IReceiptFreelancerRepository
    {

        List<EntityReceiptFreelancer> list();
        EntityReceiptFreelancer create(EntityReceiptFreelancer data);

    }
}
