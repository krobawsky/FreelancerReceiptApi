using System;
using System.Collections.Generic;
using System.Text;

namespace FreelancersApi.DBEntity.Model
{
    public class EntityReceiptFreelancer
    {

        public int Id { get; set; }
        public string Logo { get; set; }
        public string CoinType { get; set; }
        public double Charge { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Address { get; set; }
        public string FullName { get; set; }
        public string DocumentType { get; set; }
        public string DocumentNumber { get; set; }
	    public DateTime CreationDate { get; set; }

    }
}
