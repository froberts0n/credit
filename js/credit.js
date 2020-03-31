function changeDefaultVisibilityOptions(dropdown){
   console.log(dropdown.value);

   if(dropdown.value == 2){
      $( ".default_option_visibility" ).show();
   }else if(dropdown.value == 1 ){
      $( ".default_option_visibility" ).find("select").val('1').trigger('change');
   }else{
      $( ".default_option_visibility" ).find("select").val('0').trigger('change');
      $( ".default_option_visibility" ).hide();
   }
}