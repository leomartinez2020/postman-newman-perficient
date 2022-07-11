var res = pm.response.json();
var orderQuantity = pm.collectionVariables.get("orderQuantity");
var petId = pm.collectionVariables.get("petID");

pm.test("status code 200", function() {
    pm.response.to.have.status(200);
});

pm.test("Assert order quantity", () => {
  pm.expect(res.quantity).to.eql(orderQuantity);
});

pm.test("Assert pet's name", () => {
  pm.expect(res.petId).to.eql(petId);
});