export interface TableColumn {
  field: string;
  displayName: string;
  typeName: string;
  type: string;
  isShow: boolean;
  isDisplay: boolean;
}

export const newTableColumns: TableColumn[] = [
  ////////////////below are for  General --> General Information
  {
    field: 'tag_number',
    displayName: "Tag Number",
    typeName: 'General Information',
    type: "General",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'serial_number',
    displayName: "Serial Number",
    typeName: 'General Information',
    type: "General",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'part_number',
    displayName: "Item Number",
    typeName: 'General Information',
    type: "General",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'installation_app',
    displayName: "Installation Application",
    typeName: 'General Information',
    type: "General",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'process_fluid', // unsure
    displayName: "Owner",
    typeName: 'General Information',
    type: "General",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'plant',
    displayName: "Plant",
    typeName: 'General Information',
    type: "General",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'unit',
    displayName: "Unit / Vessel",
    typeName: 'General Information',
    type: "General",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'location',
    displayName: "Location",
    typeName: 'General Information',
    type: "General",
    isShow: true,
    isDisplay: true
  },
    {
    field: 'job_number',
    displayName: "Job Number",
    typeName: 'General Information',
    type: "General",
    isShow: true,
    isDisplay: true
  },
////////////////below are for  General --> Customer Contact
  {
    field: 'customer',
    displayName: 'Name',
    typeName: 'Customer Contact',
    type: 'General',
    isShow: true,
    isDisplay: true
  },
  {
    field: 'customer_phone', // unsure
    displayName: 'Phone',
    typeName: 'Customer Contact',
    type: 'General',
    isShow: true,
    isDisplay: true
  },
  {
    field: 'customer_email',// unsure
    displayName: 'Email',
    typeName: 'Customer Contact',
    type: 'General',
    isShow: true,
    isDisplay: true
  },
  ////////////////below are for  General --> Sales Order Details
  {
    field: 'sales_order_number',
    displayName: "Order Number",
    typeName: 'Sales Order Details',
    type: "General",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'industry',
    displayName: "Industry",
    typeName: 'Sales Order Details',
    type: "General",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'customer_po_number',
    displayName: "Customer PO Number",
    typeName: 'Sales Order Details',
    type: "General",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'source_factory',
    displayName: "Source Factory",
    typeName: 'Sales Order Details',
    type: "General",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'sales_rep_name',
    displayName: "Sales Rep Name",
    typeName: 'Sales Order Details',
    type: "General",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'p&id', // unsure
    displayName: "P&ID",
    typeName: 'Sales Order Details',
    type: "General",
    isShow: true,
    isDisplay: true
  },
  ////////////////below are for  General --> End User Details
  {
    field: 'end_user',
    displayName: "User Name",
    typeName: 'End User Details',
    type: "General",
    isShow: true,
    isDisplay: true
  },
   {
    field: 'end_user_address',
    displayName: "User Address",
    typeName: 'End User Details',
    type: "General",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'end_user_country',
    displayName: "Country",
    typeName: 'End User Details',
    type: "General",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'end_user_region',
    displayName: "Region",
    typeName: 'End User Details',
    type: "General",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'end_user_state',
    displayName: "State/Province",
    typeName: 'End User Details',
    type: "General",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'end_user_zip_code',
    displayName: "Zip Code",
    typeName: 'End User Details',
    type: "General",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'project_name',
    displayName: "Project Name",
    typeName: 'End User Details',
    type: "General",
    isShow: true,
    isDisplay: true
  },
  ////////////////below are for  General --> Shipped To	
   {
    field: 'ship_to',
    displayName: "User Name",
    typeName: 'Shipped To',
    type: "General",
    isShow: true,
    isDisplay: true
  },
   {
    field: 'ship_to_address',
    displayName: "Address",
    typeName: 'Shipped To',
    type: "General",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'ship_to_country',
    displayName: "Country",
    typeName: 'Shipped To',
    type: "General",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'ship_to_region',
    displayName: "Region",
    typeName: 'Shipped To',
    type: "General",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'ship_to_state',
    displayName: "State/Province",
    typeName: 'Shipped To',
    type: "General",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'ship_to_zip_code',
    displayName: "Zip Code",
    typeName: 'Shipped To',
    type: "General",
    isShow: true,
    isDisplay: true
  },
  ////////////////below are for  General --> Sold To	
   {
    field: 'sold_to',
    displayName: "User Name",
    typeName: 'Sold To',
    type: "General",
    isShow: true,
    isDisplay: true
  },
   {
    field: 'sold_to_address',
    displayName: "Address",
    typeName: 'Sold To',
    type: "General",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'sold_to_country',
    displayName: "Country",
    typeName: 'Sold To',
    type: "General",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'sold_to_region',
    displayName: "Region",
    typeName: 'Sold To',
    type: "General",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'sold_to_state',
    displayName: "State/Province",
    typeName: 'Sold To',
    type: "General",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'sold_to_zip_code',
    displayName: "Zip Code",
    typeName: 'Sold To',
    type: "General",
    isShow: true,
    isDisplay: true
  },
  ////////////////below are for CV --> Valve Configuration
   {
    field: 'manufacturer',//unsure, in vk-main-edit-table, it is in General type.
    displayName: "Manufacturer",
    typeName: 'Valve Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
   {
    field: 'model_number', //unsure, in vk-main-edit-table, it is in General type.
    displayName: "Model Number",
    typeName: 'Valve Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'product_family', //unsure, in vk-main-edit-table, it is in General type.
    displayName: "Product Family",
    typeName: 'Valve Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'body_size',
    displayName: "Body Size",
    typeName: 'Valve Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'inlet_size',
    displayName: "Inlet Size",
    typeName: 'Valve Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'outlet_size',
    displayName: "Outlet Size",
    typeName: 'Valve Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'cv',
    displayName: "Valve Cv",
    typeName: 'Valve Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
      {
    field: 'body_material',
    displayName: "Body Material",
    typeName: 'Valve Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
   {
    field: 'pressure_class',
    displayName: "Pressure Class",
    typeName: 'Valve Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'model_series', //unsure, in vk-main-edit-table, it is in General type.
    displayName: "Model Series",
    typeName: 'Valve Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'flange_face',
    displayName: "Flange Face",
    typeName: 'Valve Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'flow_direction',
    displayName: "Flow Direction",
    typeName: 'Valve Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'leakage_class',
    displayName: "Leakage Class",
    typeName: 'Valve Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
////////////////below are for CV --> Process
  {
    field: 'service_cv',
    displayName: "CV Service",
    typeName: 'Process',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
  {
    field: 'process_fluid',
    displayName: "Process Fluid",
    typeName: 'Process',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
  ////////////////below are for CV --> Positioner Configuration
    {
    field: 'positioner_serial_number',
    displayName: "Serial Number",
    typeName: 'Positioner Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
      {
    field: 'positioner_tag_number',
    displayName: "Tag",
    typeName: 'Positioner Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
      {
    field: 'positioner_model_number',
    displayName: "Model Number",
    typeName: 'Positioner Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
      {
    field: 'positioner_product_family',
    displayName: "Product Family",
    typeName: 'Positioner Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
      {
    field: 'positioner_model_series',
    displayName: "Model Series",
    typeName: 'Positioner Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
      {
    field: 'positioner_single_double',// unsure
    displayName: "Action",
    typeName: 'Positioner Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
      {
    field: 'positioner_firmware_version',
    displayName: "Firmware Version",
    typeName: 'Positioner Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
      {
    field: 'positioner_hart_version',
    displayName: "HART Version",
    typeName: 'Positioner Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
      {
    field: 'positioner_diagnostics_level',
    displayName: "Diagnostics Level",
    typeName: 'Positioner Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
  ////////////////below are for CV --> Actuator Configuration
    {
    field: 'actuator_serial_number',
    displayName: "Serial Number",
    typeName: 'Actuator Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
      {
    field: 'actuator_tag_number',
    displayName: "Tag",
    typeName: 'Actuator Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
      {
    field: 'actuator_manufacturer',
    displayName: "Manufacturer",
    typeName: 'Actuator Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
      {
    field: 'actuator_model',
    displayName: "Model Number",
    typeName: 'Actuator Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
      {
    field: 'actuator_product_family',
    displayName: "Product Family",
    typeName: 'Actuator Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
      {
    field: 'actuator_model_series',
    displayName: "Model Series",
    typeName: 'Actuator Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
      {
    field: 'fail_position',
    displayName: "Fail Position",
    typeName: 'Actuator Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
      {
    field: '', //unsure
    displayName: "Air To",
    typeName: 'Actuator Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
      {
    field: 'actuator_size',
    displayName: "Actuator Size",
    typeName: 'Actuator Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
      {
    field: 'spring_type',
    displayName: "Spring Type",
    typeName: 'Actuator Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
      {
    field: 'bench_range_min',
    displayName: "Bench Range Min",
    typeName: 'Actuator Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
      {
    field: 'bench_range_max',
    displayName: "Bench Range Max",
    typeName: 'Actuator Configuration',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
    ////////////////below are for General --> Repair Technician
    {
    field: 'name',// unsure
    displayName: "Name",
    typeName: 'Repair Technician',
    type: "General",
    isShow: true,
    isDisplay: true
  },
      {
    field: 'phone',// unsure
    displayName: "Phone",
    typeName: 'Repair Technician',
    type: "General",
    isShow: true,
    isDisplay: true
  },
      {
    field: 'email',// unsure
    displayName: "Email",
    typeName: 'Repair Technician',
    type: "General",
    isShow: true,
    isDisplay: true
  },
  ////////////////below are for General --> Scope of Work
      {
    field: 'event_type',// unsure
    displayName: "Event Type",
    typeName: 'Scope of Work',
    type: "General",
    isShow: true,
    isDisplay: true
  },
    ////////////////below are for CV --> Final Test
      {
    field: 'final_test_performed',// unsure
    displayName: "Performed",
    typeName: 'Final Test',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
        {
    field: 'final_test_date',// unsure
    displayName: "Date",
    typeName: 'Final Test',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
        {
    field: 'final_test_assembled_by',// unsure
    displayName: "Assembled By",
    typeName: 'Final Test',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
        {
    field: 'final_test_tested_by',// unsure
    displayName: "Tested By",
    typeName: 'Final Test',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
        {
    field: 'final_test_witnessed_by',// unsure
    displayName: "Witnessed By",
    typeName: 'Final Test',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
        {
    field: 'final_test_gauge',// unsure
    displayName: "Gauge #",
    typeName: 'Final Test',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
          {
    field: 'final_test_torque_wrench',// unsure
    displayName: "Torque Wrench #",
    typeName: 'Final Test',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
        {
    field: 'final_test_comments',// unsure
    displayName: "Comments",
    typeName: 'Final Test',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
////////////////below are for CV --> Final Test - Calibration/Functional Test
      {
    field: 'calibration_test_performed',// unsure
    displayName: "Performed",
    typeName: 'Final Test - Calibration/Functional Test',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
        {
    field: 'calibration_test_comments',// unsure
    displayName: "Comments",
    typeName: 'Final Test - Calibration/Functional Test',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
 ////////////////below are for CV --> Final Inspection
      {
    field: 'final_inspection_comments',// unsure
    displayName: "Comments",
    typeName: 'Final Inspection',
    type: "CV",
    isShow: true,
    isDisplay: true
  },
]