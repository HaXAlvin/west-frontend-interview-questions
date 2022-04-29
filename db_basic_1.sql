-- 5 mins
-- Question 1: What's the situation do we need to use REFERENCES
-- Question 2: What's the situation do we need to use CASCADE

-- AddForeignKey
ALTER TABLE "MultipleFactorAuth" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
