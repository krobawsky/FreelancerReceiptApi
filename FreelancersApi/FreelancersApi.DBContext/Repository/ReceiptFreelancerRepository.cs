using Dapper;
using FreelancersApi.DBContext.Base;
using FreelancersApi.DBContext.Interface;
using FreelancersApi.DBEntity.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;

namespace FreelancersApi.DBContext.Repository
{
    public class ReceiptFreelancerRepository : BaseRepository, IReceiptFreelancerRepository
    {
        public EntityReceiptFreelancer create(EntityReceiptFreelancer data)
        {
            var returnEntity = new EntityReceiptFreelancer();
            try
            {
                using (var db = GetSqlConnection())
                {
                    var p = new DynamicParameters();
                    p.Add(name: "@Logo", value: data.Logo, dbType: DbType.String, direction: ParameterDirection.Input);
                    p.Add(name: "@CoinType", value: data.CoinType, dbType: DbType.String, direction: ParameterDirection.Input);
                    p.Add(name: "@Charge", value: data.Charge, dbType: DbType.Double, direction: ParameterDirection.Input);
                    p.Add(name: "@Title", value: data.Title, dbType: DbType.String, direction: ParameterDirection.Input);
                    p.Add(name: "@Description", value: data.Description, dbType: DbType.String, direction: ParameterDirection.Input);
                    p.Add(name: "@Address", value: data.Address, dbType: DbType.String, direction: ParameterDirection.Input);
                    p.Add(name: "@FullName", value: data.FullName, dbType: DbType.String, direction: ParameterDirection.Input);
                    p.Add(name: "@DocumentType", value: data.DocumentType, dbType: DbType.String, direction: ParameterDirection.Input);
                    p.Add(name: "@DocumentNumber", value: data.DocumentNumber, dbType: DbType.String, direction: ParameterDirection.Input);

                    const string sql = @"sp_CreateReceiptFreelancer";
                    returnEntity = db.Query<EntityReceiptFreelancer>(sql: sql, param: p, commandType: CommandType.StoredProcedure).FirstOrDefault();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return returnEntity;
        }

        public List<EntityReceiptFreelancer> list()
        {
            var returnEntity = new List<EntityReceiptFreelancer>();

            try
            {
                using (var db = GetSqlConnection())
                {
                    var p = new DynamicParameters();
                    const string sql = @"sp_GetReceiptFreelancer";
                    returnEntity = db.Query<EntityReceiptFreelancer>(sql: sql, param: p, commandType: CommandType.StoredProcedure).ToList();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return returnEntity;
        }
    }
}
