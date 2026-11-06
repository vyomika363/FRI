/* DRIVE LINKS AND FRI VERSIONS (data/versions.js)
   Add a file with a line like  ["File name","short note","DRIVE LINK"],
   inside decks, pdfs, data, docs or folders of the right version.
   In a block that has "topics", add the topic as a 4th item:
   ["File name","short note","DRIVE LINK","Topic"]
   Edit this file in any text editor, save, then refresh the page.
   Colors you can use: "purple" "pink" "teal" "green" "gray" */

/* ---------- 3. INTERNAL USE: CURRENT PAPER AND PDF ----------
   Type the exact file name; its link is taken from the versions list below,
   so you only paste each link once. */
const CURRENT = { paperLabel: "v1.6", paper: "FRI_1.6.pptx", pdf: "FRI.pdf" };

/* ---------- 4. FRI VERSIONS ----------
   One block per version. Each block has 5 subsections:
   decks, pdfs, data, docs, folders  ->  ["File name","note","LINK"]  */
const VERSIONS = [
  {
    name: "v1.0 TRL 3(POC) - 5 cities", color: "teal", when: "August to December 2025", open: false,
    decks:   [["FRIv1.0_POC.pptx", "the initial proof of concept", "https://docs.google.com/presentation/d/1_V3bfndM_NnSoveCbnn-p8ctqZXiaZhS/edit?usp=sharing&ouid=103599458927524996548&rtpof=true&sd=true"]],
    pdfs:    [["FRI 1.0 flow chart.pdf", "Flow chart", "https://drive.google.com/file/d/1rHB0b9Bws2yZMxTKpYvoTS-DLyEiv73Q/view?usp=sharing"]],
    data:    [["Final_Data_POC.xlsx", "final data", "https://docs.google.com/spreadsheets/d/1lgE3g5PLvGaKNMt7SI56KNUbdtZ89dP4/edit?usp=sharing&ouid=103599458927524996548&rtpof=true&sd=true"]],
    folders: []
  },
  {
    name: "v1.5 TRL 4(Lab Validation) - 15 cities", color: "purple", when: "January to July 2026", open: false,
    decks:   [["Final Pitch Deck for GIFT.pptx", "Pitched to GIFT", "https://docs.google.com/presentation/d/13EGd4NvOrjNnvTPveV8UBsXUQiW5db1z/edit?usp=sharing&ouid=103599458927524996548&rtpof=true&sd=true"],
              ["Presentation for GIFT.pptx", "Pitched to GIFT", "https://docs.google.com/presentation/d/1uvbPR5ZJ6eZo9d3r3Q3MUu6QVgXIxu1l/edit?usp=sharing&ouid=103599458927524996548&rtpof=true&sd=true"],
              ["FRIv1.6_Summer.pptx", "", "https://docs.google.com/presentation/d/13jbfqiC8KsKl2LQ8nJcmGHgu6qirXbJv/edit?usp=sharing&ouid=103599458927524996548&rtpof=true&sd=true"]],
    pdfs:    [["FRI 1.5 flow chart.pdf", "Flow chart", "https://drive.google.com/file/d/1jIEnd6hFAdvDRlS9FG4843EaZH5OIlaG/view?usp=sharing"]],
    data:    [["Combined_Dataset_FRI.xlsx", "15 states data", "https://docs.google.com/spreadsheets/d/1ZWdsB0Dl8o2dkqE_DxyBAtPEGgX9Y17y/edit?usp=sharing&ouid=103599458927524996548&rtpof=true&sd=true"]],
    docs:    [],
    folders: []   // later: ["FRI 1.5 Resources", "Drive folder", "LINK"]
  },
  {
    name: "v1.6 TRL 4(Lab Validation) - 10 states", color: "green", when: "August to December 2026", open: false,
    decks:   [["FRI_1.6.pptx", "Current deck", "https://docs.google.com/presentation/d/1yN2F47pROPfeekmECZ_TPEBEnCCoWnpD/edit?usp=sharing&ouid=103599458927524996548&rtpof=true&sd=true"]],
    pdfs:    [],
    data:    [["FRI 1.6 data", "", "https://docs.google.com/spreadsheets/d/1uTMilboQWIoLIx2XIDWJdA6BAW7J_TmjIpzAovODXSQ/edit?usp=sharing"]],
    docs:    [],
    folders: []
  },
  {
    name: "Behind the Index", color: "pink", when: "Over the timeline", open: false,
    topics: ["IP", "Budget", "Events and PR"],
    decks:   [["Spark Minda Foundation Presentation.pptx", "Pitched to Spark Minda", "", "Events and PR"]],
    pdfs:    [],
    data:    [["Summer Budget FRI-2026", "Budget", "", "Budget"],
              ["Total budget", "Budget", "", "Budget"]],
    docs:    [["FinTech Readiness Index IP Details", "IP", "", "IP"],
              ["FRI IP Owners& Authors", "IP", "", "IP"]],
    folders: []
  },
  {
    name: "Documents archive", color: "gray", when: "Over the timeline", open: false,
    decks:   [],
    pdfs:    [],
    data:    [["FRIv1.0_Final_Data & holes", "Phase 1 data", "https://docs.google.com/spreadsheets/d/1jv-smTFroktrhtRdCp64ZypbQl_RM_1LWFdJKf-riO4/edit?usp=sharing"],
              ["FRI Master Sheet", "", "https://docs.google.com/spreadsheets/d/1e81QnVKni7qFUkDPsotkFhyuZ009rXTQSqjvql12Al4/edit?usp=sharing"]],
    docs:    [["Compiled Writeup", "Detailed explanation of parameters", "https://docs.google.com/document/d/1wPpkSB6NrBuS01eNNmDxMOza9UuWLqjo0gA29I1QdA0/edit?usp=sharing"],
              ["ANRF PREPROPOSAL: FINTECH READINESS INDEX", "Proposal", "https://docs.google.com/document/d/11eQd2kgNbHZzb9UylKiO5p6IfjdIszb2Et9NMmmdF1Y/edit?usp=sharing"],
              ["GIFT_IFI_Fintech_Readiness_Report_Rebuilt", "GIFT report", "https://docs.google.com/document/d/1shlya-rLG-kbfYSFi2CnNhZye9jjHSU9sg_rUx0kG4U/edit?usp=sharing"]],
    folders: []
  }
  /* To add a version, copy one block above, add a comma after the previous "}" */
];
