INSERT INTO category VALUES(null,'Liquor','CA-001','Let Try Some','01-10-2022','01-10-2022');
INSERT INTO category VALUES(null,'Beer','CA-002','Let Try Some','01-10-2022','01-10-2022');
INSERT INTO brand_data VALUES(null,'CA-001','Whiskey','B-001','Let Try Some','01-10-2022','01-10-2022');
INSERT INTO brand_data VALUES(null,'CA-001','Vodka','B-002','Let Try Some','01-10-2022','01-10-2022');
INSERT INTO sub_brand_data VALUES(null,'B-002','SB-001','Absoulute','Try It Now','1L','01-10-2022','01-10-2022');
INSERT INTO sub_brand_data VALUES(null,'B-002','SB-002','Sky Vodka','Try It Now','1L','01-10-2022','01-10-2022');
INSERT INTO supplier VALUES(null,'U Khant Ti Kyi','SUP-001','Sanchaung','0979252543','Test','01-10-2022','01-10-2022');
INSERT INTO size VALUES(null,'1 L','1 L','01-10-2022','01-10-2022');
INSERT INTO size VALUES(null,'0.75 L','0.75 L','01-10-2022','01-10-2022');
INSERT INTO size VALUES(null,'0.5 L','0.5 L','01-10-2022','01-10-2022');
INSERT INTO purchase VALUES(null,'PU-001','VO-001','27/9/2022','KHANT','09123311','CA-001','Yagon','B-001','SB-001','1 L','5','25000','true','false','25000','0','120000','01-10-2022','01-10-2022');
INSERT INTO stock VALUES(null,'ST-001','PU-001','27/9/2022','B-001','SB-001','1 L','5','25000','25000','35000','INSTOCK','01-10-2022','01-10-2022');
INSERT INTO item_price VALUES(null,'PR-001','B-002','SB-002','1 L','25000','25000','01-10-2022','01-10-2022');
INSERT INTO sales VALUES(null,'SA-00001' ,'VC-001' ,'12-10-2022' ,'Aye Aye' ,'120,000' ,'2,000','true' ,'true' ,"true" ,'3000' ,'130,500' , '140,000' , '9,500' ,'01-10-2022','01-10-2022'); 
INSERT INTO sales_item VALUES(null,'itemCode','SA-00001', 'saleVoucherCode', 'brandCode', 'subBrandCode', 'quantity', 'price','amount', 'size'); 
INSERT INTO program VALUES(null,'1','P-0000001','CATEGORY','CATEGORY','TRUE','TRUE','TRUE','TRUE');
INSERT INTO program VALUES(null,'2','P-0000002','BRAND','CATEGORY','TRUE','TRUE','TRUE','TRUE');
INSERT INTO program VALUES(null,'3','P-0000003','SUB-BRAND','CATEGORY','TRUE','TRUE','TRUE','TRUE');
INSERT INTO program VALUES(null,'4','P-0000004','ITEM-PRICE','CATEGORY','TRUE','TRUE','TRUE','TRUE');
INSERT INTO program VALUES(null,'5','P-0000005','SALE','CATEGORY','TRUE','TRUE','TRUE','TRUE');
INSERT INTO program VALUES(null,'6','P-0000006','PURCHASE','CATEGORY','TRUE','TRUE','TRUE','TRUE');
INSERT INTO program VALUES(null,'7','P-0000007','REPORT','CATEGORY','TRUE','TRUE','TRUE','TRUE');
INSERT INTO user VALUES(null,'USER-001','0999777123','Admin','admin123','admin123','system@gmail.com','ADM','01-10-2022','01-10-2022');
INSERT INTO user_role VALUES(null,'USER-001','Admin','ADM','01-10-2022','01-10-2022');
INSERT INTO role VALUES(null,'ADM','ADMIN','01-10-2022','01-10-2022');
INSERT INTO role VALUES(null,'USR','USER','01-10-2022','01-10-2022');
INSERT INTO login_user VALUES(null,'USER-001','ADM','Admin','admin123');