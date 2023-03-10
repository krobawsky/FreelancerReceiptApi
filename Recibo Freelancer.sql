CREATE DATABASE Retos;
USE Retos;

CREATE TABLE ReceiptFreelancer (
    Id int IDENTITY(1,1),
    Logo varchar(255),
    CoinType varchar(55),
    Charge float,
    Title varchar(90),
    Description varchar(255),
    Address varchar(255),
    FullName varchar(255),
    DocumentType varchar(90),
    DocumentNumber varchar(90),
	CreationDate datetime
);

select * from ReceiptFreelancer;

--------------------------------
/** CREAR RECIBO FRELANCER **/ 
--------------------------------

GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROC [dbo].[sp_CreateReceiptFreelancer]
(
	@Id INT OUTPUT,
	@Logo varchar(255),
	@CoinType varchar(55),
    @Charge float,
    @Title varchar(90),
    @Description varchar(255),
    @Address varchar(255),
    @FullName varchar(255),
    @DocumentType varchar(90),
	@DocumentNumber varchar(90)
)
AS
BEGIN
INSERT INTO ReceiptFreelancer(
    Logo,
    CoinType,
    Charge,
    Title,
    Description,
    Address,
    FullName,
    DocumentType,
    DocumentNumber,
	CreationDate
)
VALUES(	
	@Logo,
	@CoinType,
    @Charge,
    @Title,
    @Description,
    @Address,
    @FullName,
    @DocumentType,
	@DocumentNumber,
	GETDATE()
)

SET @Id = SCOPE_IDENTITY()
SELECT TOP 1 * FROM ReceiptFreelancer ORDER BY Id DESC 

END

--------------------------------
/** CREAR RECIBO FRELANCER **/ 
--------------------------------

GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROC [dbo].[sp_GetReceiptFreelancer]
AS  
BEGIN

SELECT *
FROM ReceiptFreelancer 
 
END  




exec [dbo].[sp_CreateReceiptFreelancer]
@Id = 0,
@Logo = 'adawd',
@CoinType = 'adawd',
@Charge = 1,
@Title = 'adawd',
@Description  = 'adawd',
@Address = 'adawd',
@FullName = 'adawd',
@DocumentType = 'adawd',
@DocumentNumber = '123213'

exec [dbo].[sp_GetReceiptFreelancer]

select * from ReceiptFreelancer;

