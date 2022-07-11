var res = pm.response.json();

// Pet's name was previously created in a pre-request
var petName = pm.collectionVariables.get("petName");

// Store response pet ID as a collection variable
pm.collectionVariables.set("petID", res.id);

pm.test("status code 200", function() {
    pm.response.to.have.status(200);
});

pm.test("Assert pet's name", () => {
  pm.expect(res.name).to.eql(petName);
});