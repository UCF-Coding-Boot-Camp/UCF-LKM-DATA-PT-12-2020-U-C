// Use D3 to create an event handler
d3.selectAll("body").on("change", updatePage);

function updatePage() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.selectAll("#selectOption").node();
  // Assign the dropdown menu item ID to a variable
  var dropdownMenuID = dropdownMenu.id;
  // Assign the dropdown menu option to a variable
  var selectedOption = dropdownMenu.value;

  console.log(dropdownMenuID);
  console.log(selectedOption);
}
