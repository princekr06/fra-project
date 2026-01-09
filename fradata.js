const data_list = [
  {
    "type": "Feature",
    "properties": {
      "feature_type": "person",
      "person_id": "P001",
      "name": "Ravi Kumar",
      "age": 42,
      "gender": "Male",
      "household_id": "H100",
      "contact": "+91-9876543210",
      "occupation": "Farmer",
      "village": "Bandhgora",
      "land_request": {
        "request_id": "R001",
        "status": "pending",
        "requested_area_ha": 0.25,
        "land_type": "cultivable",
        "request_date": "2025-09-15",
        "supporting_docs": ["ration_card", "voter_id"]
      }
    },
    "geometry": {
      "type": "Point",
      "coordinates": [77.4126, 23.2562]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "feature_type": "person",
      "person_id": "P002",
      "name": "Sunita Devi",
      "age": 35,
      "gender": "Female",
      "household_id": "H101",
      "contact": "+91-9123456780",
      "occupation": "Agricultural labour",
      "village": "Bandhgora",
      "land_request": {
        "request_id": "R002",
        "status": "approved",
        "approved_area_ha": 0.5,
        "land_type": "homestead",
        "request_date": "2025-06-20",
        "approval_date": "2025-08-01",
        "supporting_docs": ["land_record_extract", "affidavit"]
      }
    },
    "geometry": {
      "type": "Point",
      "coordinates": [76.4150, 23.2530]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "feature_type": "person",
      "person_id": "P003",
      "name": "Mohammad Ali",
      "age": 28,
      "gender": "Male",
      "household_id": "H102",
      "contact": "+91-9988776655",
      "occupation": "Daily wage",
      "village": "Chandpura",
      "land_request": {
        "request_id": "R003",
        "status": "rejected",
        "requested_area_ha": 0.3,
        "land_type": "cultivable",
        "request_date": "2025-07-10",
        "rejection_reason": "insufficient supporting documents",
        "supporting_docs": ["ration_card"]
      }
    },
    "geometry": {
      "type": "Point",
      "coordinates": [77.1901, 23.3202]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "feature_type": "person",
      "person_id": "P004",
      "name": "Geeta Sharma",
      "age": 55,
      "gender": "Female",
      "household_id": "H103",
      "contact": "+91-9012345678",
      "occupation": "Weaver",
      "village": "Shyampur",
      "land_request": {
        "request_id": "R004",
        "status": "pending",
        "requested_area_ha": 0.15,
        "land_type": "homestead",
        "request_date": "2025-09-01",
        "supporting_docs": ["aadhaar_card", "household_certificate"]
      }
    },
    "geometry": {
      "type": "Point",
      "coordinates": [77.0020, 23.2855]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "feature_type": "person",
      "person_id": "P005",
      "name": "Ram Das",
      "age": 60,
      "gender": "Male",
      "household_id": "H104",
      "contact": "+91-9898767654",
      "occupation": "Retired",
      "village": "Ramnagar",
      "land_request": {
        "request_id": "R005",
        "status": "approved",
        "approved_area_ha": 0.75,
        "land_type": "cultivable",
        "request_date": "2025-05-10",
        "approval_date": "2025-07-20",
        "supporting_docs": ["pension_document", "voter_id"]
      }
    },
    "geometry": {
      "type": "Point",
      "coordinates": [77.4589, 23.3512]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "person_id": "P0017",
      "name": "sontash Kumar",
      "feature_type": "land_request_parcel",
      "request_id": "R001",
      "linked_person_id": "P001",
      "status": "pending",
      "area_ha": 0.25,
      "notes": "requested next to household",
      "preferred_use": "cultivation"
    },
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [77.4116, 23.2572],
          [77.4129, 23.2572],
          [77.4125, 23.2562],
          [77.4116, 23.2572]
        ]
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "person_id": "P0016",
      "name": " Kumar",
      "feature_type": "land_request_parcel",
      "request_id": "R002",
      "linked_person_id": "P002",
      "status": "approved",
      "area_ha": 0.5,
      "approval_date": "2025-08-01",
      "notes": "allocated near village common area",
      "preferred_use": "homestead"
    },
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [77.4140, 23.2538],
          [77.4160, 23.2538],
          [77.4155, 23.2524],
          [77.4140, 23.2538]
        ]
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "feature_type": "land_request_parcel",
      "request_id": "R004",
      "linked_person_id": "P004",
      "status": "pending",
      "area_ha": 0.15,
      "notes": "small plot for a residential structure",
      "preferred_use": "homestead"
    },
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [77.5010, 23.2865],
          [77.5030, 23.2865],
          [77.5025, 23.2850],
          [77.5010, 23.2865]
        ]
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "feature_type": "land_request_parcel",
      "request_id": "R005",
      "linked_person_id": "P005",
      "status": "approved",
      "area_ha": 0.75,
      "approval_date": "2025-07-20",
      "notes": "large parcel near a stream",
      "preferred_use": "cultivation"
    },
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [77.4579, 23.3522],
          [77.4599, 23.3522],
          [77.4594, 23.3508],
          [77.4579, 23.3522]
        ]
      ]
    }
  }
];

