-- CreateTable
CREATE TABLE "transaction" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "payment_id" STRING NOT NULL,
    "status" STRING NOT NULL,
    "currency" STRING NOT NULL,
    "fees" INT4 NOT NULL,
    "amount" INT4 NOT NULL,
    "longurl" STRING NOT NULL,
    "shorturl" STRING NOT NULL,
    "purpose" STRING NOT NULL,
    "buyer_email" STRING NOT NULL,
    "buyer_name" STRING NOT NULL,
    "buyer_phone" STRING NOT NULL,
    "mac" STRING NOT NULL,
    "payment_request_id" STRING NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "transaction_payment_id" ON "transaction"("payment_id");

-- CreateIndex
CREATE INDEX "transaction_longurl" ON "transaction"("longurl");

-- CreateIndex
CREATE INDEX "transaction_status" ON "transaction"("status");
