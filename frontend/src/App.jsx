import { useEffect, useMemo, useState } from "react";
import "./App.css";


const translations = {
  hi: {"Workspace": "कार्यस्थान", "Dashboard": "डैशबोर्ड", "Create Request": "अनुरोध बनाएँ", "My Requests": "मेरे अनुरोध", "Pending Requests": "लंबित अनुरोध", "Verify Proof": "प्रमाण सत्यापित करें", "Payment Status": "भुगतान स्थिति", "My Profile": "मेरी प्रोफ़ाइल", "WORKSPACE": "कार्यस्थान", "Proof comes first.": "प्रमाण सबसे पहले।", "Review evidence before making a payment decision.": "भुगतान का निर्णय लेने से पहले प्रमाण की समीक्षा करें।", "Sign out": "लॉग आउट", "Refresh requests": "अनुरोध रीफ़्रेश करें", "Open your profile": "अपनी प्रोफ़ाइल खोलें", "Make every payment": "हर भुगतान करें", "with confidence.": "विश्वास के साथ।", "Your proof-first payment verification workspace.": "आपका प्रमाण-प्रथम भुगतान सत्यापन कार्यक्षेत्र।", "Create request": "अनुरोध बनाएँ", "Total requests": "कुल अनुरोध", "Awaiting proof": "प्रमाण की प्रतीक्षा", "Ready to review": "समीक्षा के लिए तैयार", "Approved": "स्वीकृत", "All tracked requests": "सभी ट्रैक किए गए अनुरोध", "Evidence not submitted": "प्रमाण जमा नहीं हुआ", "Proof submitted": "प्रमाण जमा किया गया", "Verified successfully": "सफलतापूर्वक सत्यापित", "YOUR CONTROL CENTER": "आपका नियंत्रण केंद्र", "Proof first.": "पहले प्रमाण।", "Payment next.": "फिर भुगतान।", "Keep payment expectations clear, evidence organized, and decisions easy to follow.": "भुगतान की अपेक्षाएँ स्पष्ट रखें, प्रमाण व्यवस्थित करें और निर्णयों को समझना आसान बनाएँ।", "Start a request": "अनुरोध शुरू करें", "SHORTCUTS": "शॉर्टकट", "Quick actions": "त्वरित कार्य", "Create a request": "अनुरोध बनाएँ", "Set payment expectations": "भुगतान की अपेक्षाएँ तय करें", "Review proof": "प्रमाण की समीक्षा करें", "Browse requests": "अनुरोध देखें", "Search and filter records": "रिकॉर्ड खोजें और फ़िल्टर करें", "Create Payment Request": "भुगतान अनुरोध बनाएँ", "Enter the payment details below.": "नीचे भुगतान का विवरण दर्ज करें।", "Payment title": "भुगतान का शीर्षक", "Amount (₹)": "राशि (₹)", "Description": "विवरण", "Requester": "अनुरोधकर्ता", "Receiver": "प्राप्तकर्ता", "Due date": "अंतिम तिथि", "Proof type": "प्रमाण का प्रकार", "Priority": "प्राथमिकता", "Normal": "सामान्य", "Proof required": "आवश्यक प्रमाण", "Add Proof Photos": "प्रमाण की फ़ोटो जोड़ें", "Choose photos": "फ़ोटो चुनें", "Create payment request": "भुगतान अनुरोध बनाएँ", "Creating request...": "अनुरोध बनाया जा रहा है...", "Cancel": "रद्द करें", "How it works": "यह कैसे काम करता है", "Three simple steps": "तीन आसान चरण", "Submit payment proof": "भुगतान प्रमाण जमा करें", "Review the request": "अनुरोध की समीक्षा करें", "All Payment Requests": "सभी भुगतान अनुरोध", "Requests retrieved from your backend": "आपके बैकएंड से प्राप्त अनुरोध", "Loading payment requests...": "भुगतान अनुरोध लोड हो रहे हैं...", "No payment requests yet": "अभी तक कोई भुगतान अनुरोध नहीं है", "Create your first request using the form above.": "ऊपर दिए गए फ़ॉर्म से अपना पहला अनुरोध बनाएँ।", "Request": "अनुरोध", "Requester / receiver": "अनुरोधकर्ता / प्राप्तकर्ता", "Status": "स्थिति", "Created": "बनाया गया", "Action": "कार्रवाई", "Submit proof": "प्रमाण जमा करें", "Enter proof details": "प्रमाण का विवरण दर्ज करें", "No description provided": "कोई विवरण नहीं दिया गया", "Untitled request": "बिना शीर्षक का अनुरोध", "Payment workspace": "भुगतान कार्यक्षेत्र", "Payment status": "भुगतान स्थिति", "Pending": "लंबित", "Rejected": "अस्वीकृत", "Profile": "प्रोफ़ाइल", "Full name": "पूरा नाम", "Email address": "ईमेल पता", "Phone number": "फ़ोन नंबर", "Location": "स्थान", "Bio": "परिचय", "Save profile": "प्रोफ़ाइल सहेजें", "Update profile": "प्रोफ़ाइल अपडेट करें", "Upload photo": "फ़ोटो अपलोड करें", "Remove photo": "फ़ोटो हटाएँ", "Sign in": "साइन इन", "Create account": "खाता बनाएँ", "Welcome back": "वापसी पर स्वागत है", "Good to see you.": "आपको फिर देखकर अच्छा लगा।", "Welcome to ProofBeforePay!": "ProofBeforePay में आपका स्वागत है!", "GET STARTED": "शुरू करें", "WELCOME BACK": "वापसी पर स्वागत है", "Password": "पासवर्ड", "Confirm password": "पासवर्ड की पुष्टि करें", "Already have an account?": "क्या आपका पहले से खाता है?", "Don’t have an account?": "क्या आपका खाता नहीं है?", "Already have an account": "क्या आपका पहले से खाता है", "language": "भाषा", "Language": "भाषा", "VERIFY BEFORE YOU PAY": "भुगतान से पहले सत्यापित करें", "Confidence starts with ": "विश्वास की शुरुआत ", "proof.": "प्रमाण से होती है।", "Organize payment requests, review evidence, and make clearer decisions before money changes hands.": "भुगतान अनुरोध व्यवस्थित करें, प्रमाण की समीक्षा करें और पैसे भेजने से पहले सही निर्णय लें।", "Proof-first workflow": "प्रमाण-प्रथम प्रक्रिया", "Keep evidence close to every request.": "हर अनुरोध के साथ प्रमाण रखें।", "Clear decisions": "स्पष्ट निर्णय", "Track pending, approved, and rejected items.": "लंबित, स्वीकृत और अस्वीकृत अनुरोध ट्रैक करें।", "One organized workspace": "एक व्यवस्थित कार्यक्षेत्र", "Stay on top of every payment request.": "हर भुगतान अनुरोध पर नज़र रखें।", "Proof first. Payment next.": "पहले प्रमाण। फिर भुगतान।", "Create your account": "अपना खाता बनाएँ", "Set up your workspace in a few steps.": "कुछ आसान चरणों में अपना कार्यक्षेत्र सेट करें।", "Sign in to continue to your payment workspace.": "अपने भुगतान कार्यक्षेत्र में आगे बढ़ने के लिए साइन इन करें।", "Secure workspace": "सुरक्षित कार्यक्षेत्र", "Demo mode": "डेमो मोड", "New to ProofBeforePay?": "ProofBeforePay पर नए हैं?", "Create an account": "खाता बनाएँ", "Demo sign-in only. Connect a Spring Boot authentication API before using real accounts.": "यह केवल डेमो साइन-इन है। वास्तविक खातों के लिए Spring Boot प्रमाणीकरण API जोड़ें।", "e.g. Raja Patel": "उदा. राजा पटेल", "At least 8 characters": "कम से कम 8 अक्षर", "Re-enter your password": "पासवर्ड फिर से दर्ज करें", "Use at least 8 characters, with a letter and a number.": "कम से कम 8 अक्षर, एक अक्षर और एक संख्या का उपयोग करें।"},
  kn: {"Workspace": "ಕಾರ್ಯಕ್ಷೇತ್ರ", "Dashboard": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್", "Create Request": "ವಿನಂತಿ ರಚಿಸಿ", "My Requests": "ನನ್ನ ವಿನಂತಿಗಳು", "Pending Requests": "ಬಾಕಿ ಇರುವ ವಿನಂತಿಗಳು", "Verify Proof": "ಪುರಾವೆ ಪರಿಶೀಲಿಸಿ", "Payment Status": "ಪಾವತಿ ಸ್ಥಿತಿ", "My Profile": "ನನ್ನ ಪ್ರೊಫೈಲ್", "WORKSPACE": "ಕಾರ್ಯಕ್ಷೇತ್ರ", "Proof comes first.": "ಪುರಾವೆಗೆ ಮೊದಲ ಆದ್ಯತೆ.", "Review evidence before making a payment decision.": "ಪಾವತಿ ನಿರ್ಧಾರ ಮಾಡುವ ಮೊದಲು ಪುರಾವೆಯನ್ನು ಪರಿಶೀಲಿಸಿ.", "Sign out": "ಲಾಗ್ ಔಟ್", "Refresh requests": "ವಿನಂತಿಗಳನ್ನು ಮರುಲೋಡ್ ಮಾಡಿ", "Open your profile": "ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ತೆರೆಯಿರಿ", "Make every payment": "ಪ್ರತಿ ಪಾವತಿಯನ್ನು ಮಾಡಿ", "with confidence.": "ವಿಶ್ವಾಸದಿಂದ.", "Your proof-first payment verification workspace.": "ನಿಮ್ಮ ಪುರಾವೆ-ಮೊದಲ ಪಾವತಿ ಪರಿಶೀಲನಾ ಕಾರ್ಯಕ್ಷೇತ್ರ.", "Create request": "ವಿನಂತಿ ರಚಿಸಿ", "Total requests": "ಒಟ್ಟು ವಿನಂತಿಗಳು", "Awaiting proof": "ಪುರಾವೆಗಾಗಿ ಕಾಯುತ್ತಿದೆ", "Ready to review": "ಪರಿಶೀಲನೆಗೆ ಸಿದ್ಧ", "Approved": "ಅನುಮೋದಿಸಲಾಗಿದೆ", "All tracked requests": "ಟ್ರ್ಯಾಕ್ ಮಾಡಿದ ಎಲ್ಲಾ ವಿನಂತಿಗಳು", "Evidence not submitted": "ಪುರಾವೆ ಸಲ್ಲಿಸಲಾಗಿಲ್ಲ", "Proof submitted": "ಪುರಾವೆ ಸಲ್ಲಿಸಲಾಗಿದೆ", "Verified successfully": "ಯಶಸ್ವಿಯಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ", "YOUR CONTROL CENTER": "ನಿಮ್ಮ ನಿಯಂತ್ರಣ ಕೇಂದ್ರ", "Proof first.": "ಮೊದಲು ಪುರಾವೆ.", "Payment next.": "ನಂತರ ಪಾವತಿ.", "Keep payment expectations clear, evidence organized, and decisions easy to follow.": "ಪಾವತಿ ನಿರೀಕ್ಷೆಗಳನ್ನು ಸ್ಪಷ್ಟವಾಗಿಡಿ, ಪುರಾವೆಗಳನ್ನು ಕ್ರಮಬದ್ಧಗೊಳಿಸಿ ಮತ್ತು ನಿರ್ಧಾರಗಳನ್ನು ಸುಲಭವಾಗಿ ಅನುಸರಿಸಿ.", "Start a request": "ವಿನಂತಿ ಪ್ರಾರಂಭಿಸಿ", "SHORTCUTS": "ತ್ವರಿತ ಆಯ್ಕೆಗಳು", "Quick actions": "ತ್ವರಿತ ಕಾರ್ಯಗಳು", "Create a request": "ವಿನಂತಿ ರಚಿಸಿ", "Set payment expectations": "ಪಾವತಿ ನಿರೀಕ್ಷೆಗಳನ್ನು ಹೊಂದಿಸಿ", "Review proof": "ಪುರಾವೆ ಪರಿಶೀಲಿಸಿ", "Browse requests": "ವಿನಂತಿಗಳನ್ನು ವೀಕ್ಷಿಸಿ", "Search and filter records": "ದಾಖಲೆಗಳನ್ನು ಹುಡುಕಿ ಮತ್ತು ಫಿಲ್ಟರ್ ಮಾಡಿ", "Create Payment Request": "ಪಾವತಿ ವಿನಂತಿ ರಚಿಸಿ", "Enter the payment details below.": "ಕೆಳಗೆ ಪಾವತಿ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ.", "Payment title": "ಪಾವತಿ ಶೀರ್ಷಿಕೆ", "Amount (₹)": "ಮೊತ್ತ (₹)", "Description": "ವಿವರಣೆ", "Requester": "ವಿನಂತಿದಾರರು", "Receiver": "ಸ್ವೀಕರಿಸುವವರು", "Due date": "ಕೊನೆಯ ದಿನಾಂಕ", "Proof type": "ಪುರಾವೆಯ ಪ್ರಕಾರ", "Priority": "ಆದ್ಯತೆ", "Normal": "ಸಾಮಾನ್ಯ", "Proof required": "ಅಗತ್ಯವಿರುವ ಪುರಾವೆ", "Add Proof Photos": "ಪುರಾವೆ ಫೋಟೋಗಳನ್ನು ಸೇರಿಸಿ", "Choose photos": "ಫೋಟೋಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ", "Create payment request": "ಪಾವತಿ ವಿನಂತಿ ರಚಿಸಿ", "Creating request...": "ವಿನಂತಿ ರಚಿಸಲಾಗುತ್ತಿದೆ...", "Cancel": "ರದ್ದುಮಾಡಿ", "How it works": "ಇದು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ", "Three simple steps": "ಮೂರು ಸರಳ ಹಂತಗಳು", "Submit payment proof": "ಪಾವತಿ ಪುರಾವೆ ಸಲ್ಲಿಸಿ", "Review the request": "ವಿನಂತಿಯನ್ನು ಪರಿಶೀಲಿಸಿ", "All Payment Requests": "ಎಲ್ಲಾ ಪಾವತಿ ವಿನಂತಿಗಳು", "Requests retrieved from your backend": "ನಿಮ್ಮ ಬ್ಯಾಕೆಂಡ್‌ನಿಂದ ಪಡೆದ ವಿನಂತಿಗಳು", "Loading payment requests...": "ಪಾವತಿ ವಿನಂತಿಗಳು ಲೋಡ್ ಆಗುತ್ತಿವೆ...", "No payment requests yet": "ಇನ್ನೂ ಪಾವತಿ ವಿನಂತಿಗಳಿಲ್ಲ", "Create your first request using the form above.": "ಮೇಲಿನ ಫಾರ್ಮ್ ಬಳಸಿ ನಿಮ್ಮ ಮೊದಲ ವಿನಂತಿಯನ್ನು ರಚಿಸಿ.", "Request": "ವಿನಂತಿ", "Requester / receiver": "ವಿನಂತಿದಾರರು / ಸ್ವೀಕರಿಸುವವರು", "Status": "ಸ್ಥಿತಿ", "Created": "ರಚಿಸಲಾಗಿದೆ", "Action": "ಕ್ರಿಯೆ", "Submit proof": "ಪುರಾವೆ ಸಲ್ಲಿಸಿ", "Enter proof details": "ಪುರಾವೆಯ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ", "No description provided": "ವಿವರಣೆ ನೀಡಲಾಗಿಲ್ಲ", "Untitled request": "ಶೀರ್ಷಿಕೆಯಿಲ್ಲದ ವಿನಂತಿ", "Payment workspace": "ಪಾವತಿ ಕಾರ್ಯಕ್ಷೇತ್ರ", "Payment status": "ಪಾವತಿ ಸ್ಥಿತಿ", "Pending": "ಬಾಕಿ ಇದೆ", "Rejected": "ತಿರಸ್ಕರಿಸಲಾಗಿದೆ", "Profile": "ಪ್ರೊಫೈಲ್", "Full name": "ಪೂರ್ಣ ಹೆಸರು", "Email address": "ಇಮೇಲ್ ವಿಳಾಸ", "Phone number": "ಫೋನ್ ಸಂಖ್ಯೆ", "Location": "ಸ್ಥಳ", "Bio": "ಪರಿಚಯ", "Save profile": "ಪ್ರೊಫೈಲ್ ಉಳಿಸಿ", "Update profile": "ಪ್ರೊಫೈಲ್ ನವೀಕರಿಸಿ", "Upload photo": "ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ", "Remove photo": "ಫೋಟೋ ತೆಗೆದುಹಾಕಿ", "Sign in": "ಸೈನ್ ಇನ್", "Create account": "ಖಾತೆ ರಚಿಸಿ", "Welcome back": "ಮತ್ತೆ ಸ್ವಾಗತ", "Good to see you.": "ನಿಮ್ಮನ್ನು ಮತ್ತೆ ನೋಡಿ ಸಂತೋಷವಾಯಿತು.", "Welcome to ProofBeforePay!": "ProofBeforePay ಗೆ ಸ್ವಾಗತ!", "GET STARTED": "ಪ್ರಾರಂಭಿಸಿ", "WELCOME BACK": "ಮತ್ತೆ ಸ್ವಾಗತ", "Password": "ಪಾಸ್‌ವರ್ಡ್", "Confirm password": "ಪಾಸ್‌ವರ್ಡ್ ದೃಢೀಕರಿಸಿ", "Already have an account?": "ಈಗಾಗಲೇ ಖಾತೆ ಇದೆಯೇ?", "Don’t have an account?": "ಖಾತೆ ಇಲ್ಲವೇ?", "language": "ಭಾಷೆ", "Language": "ಭಾಷೆ", "VERIFY BEFORE YOU PAY": "ಪಾವತಿಸುವ ಮೊದಲು ಪರಿಶೀಲಿಸಿ", "Confidence starts with ": "ವಿಶ್ವಾಸದ ಆರಂಭ ", "proof.": "ಪುರಾವೆಯಿಂದ.", "Organize payment requests, review evidence, and make clearer decisions before money changes hands.": "ಪಾವತಿ ವಿನಂತಿಗಳನ್ನು ವ್ಯವಸ್ಥಿತಗೊಳಿಸಿ, ಪುರಾವೆ ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಹಣ ವರ್ಗಾಯಿಸುವ ಮೊದಲು ಸ್ಪಷ್ಟ ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳಿ.", "Proof-first workflow": "ಪುರಾವೆಗೆ ಮೊದಲ ಆದ್ಯತೆ", "Keep evidence close to every request.": "ಪ್ರತಿ ವಿನಂತಿಯೊಂದಿಗೆ ಪುರಾವೆ ಇರಿಸಿ.", "Clear decisions": "ಸ್ಪಷ್ಟ ನಿರ್ಧಾರಗಳು", "Track pending, approved, and rejected items.": "ಬಾಕಿ, ಅನುಮೋದಿತ ಮತ್ತು ತಿರಸ್ಕೃತ ವಿನಂತಿಗಳನ್ನು ಗಮನಿಸಿ.", "One organized workspace": "ಒಂದು ವ್ಯವಸ್ಥಿತ ಕಾರ್ಯಕ್ಷೇತ್ರ", "Stay on top of every payment request.": "ಪ್ರತಿ ಪಾವತಿ ವಿನಂತಿಯ ಮಾಹಿತಿಯನ್ನು ಸುಲಭವಾಗಿ ನಿರ್ವಹಿಸಿ.", "Proof first. Payment next.": "ಮೊದಲು ಪುರಾವೆ. ನಂತರ ಪಾವತಿ.", "Create your account": "ನಿಮ್ಮ ಖಾತೆ ರಚಿಸಿ", "Set up your workspace in a few steps.": "ಕೆಲವು ಸರಳ ಹಂತಗಳಲ್ಲಿ ನಿಮ್ಮ ಕಾರ್ಯಕ್ಷೇತ್ರವನ್ನು ಸಿದ್ಧಪಡಿಸಿ.", "Sign in to continue to your payment workspace.": "ನಿಮ್ಮ ಪಾವತಿ ಕಾರ್ಯಕ್ಷೇತ್ರಕ್ಕೆ ಮುಂದುವರಿಯಲು ಸೈನ್ ಇನ್ ಮಾಡಿ.", "Secure workspace": "ಸುರಕ್ಷಿತ ಕಾರ್ಯಕ್ಷೇತ್ರ", "Demo mode": "ಡೆಮೊ ಮೋಡ್", "New to ProofBeforePay?": "ProofBeforePay ಗೆ ಹೊಸಬರೇ?", "Create an account": "ಖಾತೆ ರಚಿಸಿ", "Demo sign-in only. Connect a Spring Boot authentication API before using real accounts.": "ಇದು ಡೆಮೊ ಸೈನ್-ಇನ್ ಮಾತ್ರ. ನೈಜ ಖಾತೆಗಳಿಗೆ Spring Boot authentication API ಸಂಪರ್ಕಿಸಿ.", "e.g. Raja Patel": "ಉದಾ. ರಾಜಾ ಪಟೇಲ್", "At least 8 characters": "ಕನಿಷ್ಠ 8 ಅಕ್ಷರಗಳು", "Re-enter your password": "ಪಾಸ್‌ವರ್ಡ್ ಮತ್ತೆ ನಮೂದಿಸಿ", "Use at least 8 characters, with a letter and a number.": "ಕನಿಷ್ಠ 8 ಅಕ್ಷರಗಳು, ಒಂದು ಅಕ್ಷರ ಮತ್ತು ಒಂದು ಸಂಖ್ಯೆಯನ್ನು ಬಳಸಿ."}
};

const API = "http://localhost:8080/api/requests";
const PHOTO_LIMIT = 5;
const PHOTO_SIZE_LIMIT = 2 * 1024 * 1024;

const emptyRequest = {
  title: "",
  amount: "",
  requesterName: "",
  receiverName: "",
  description: "",
  dueDate: "",
  proofType: "",
  priority: "Normal",
  proofDescription: "",
};

function App() {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("proofbeforepay-language");
    return ["en", "hi", "kn"].includes(saved) ? saved : "en";
  });
  function t(text) { return translations[language]?.[text] || text; }
  function changeLanguage(value) {
    setLanguage(value);
    localStorage.setItem("proofbeforepay-language", value);
  }
  const [page, setPage] = useState(
    localStorage.getItem("pbp_user") ? "dashboard" : "login"
  );
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("pbp_user")) || null;
    } catch {
      return null;
    }
  });
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [form, setForm] = useState(emptyRequest);
  const [photos, setPhotos] = useState([]);
  const [photoError, setPhotoError] = useState("");
  const [proofInputs, setProofInputs] = useState({});
  const [reviewInputs, setReviewInputs] = useState({});
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirm, setRegisterConfirm] = useState("");
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [changeCurrentPassword, setChangeCurrentPassword] = useState("");
  const [changeNewPassword, setChangeNewPassword] = useState("");
  const [changeConfirmPassword, setChangeConfirmPassword] = useState("");
  const [changingPassword, setChangingPassword] = useState(false);

  const [profileForm, setProfileForm] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("pbp_user")) || {};
      return {
        name: saved.name || "",
        email: saved.email || "",
        phone: saved.phone || "",
        location: saved.location || "",
        bio: saved.bio || "",
        photo: saved.photo || "",
      };
    } catch {
      return { name: "", email: "", phone: "", location: "", bio: "", photo: "" };
    }
  });

  useEffect(() => {
    if (user) loadRequests();
  }, [user]);

  async function getErrorMessage(response) {
    const text = await response.text();
    if (!text) return `HTTP ${response.status}: ${response.statusText}`;
    try {
      const data = JSON.parse(text);
      if (data.message) return data.message;
      if (data.detail) return data.detail;
      if (Array.isArray(data.errors)) {
        return data.errors.map((item) => item.defaultMessage || item.message || String(item)).join(" ");
      }
      if (data.errors && typeof data.errors === "object") {
        return Object.values(data.errors).join(" ");
      }
      if (data.title && data.status) return data.title;
      return JSON.stringify(data);
    } catch {
      return text;
    }
  }

  async function loadRequests() {
    try {
      setError("");
      const response = await fetch(API);
      if (!response.ok) throw new Error(await getErrorMessage(response));
      const data = await response.json();
      // Keep the existing UI labels while translating backend status names.
      const normalized = Array.isArray(data)
        ? data.map((item) => ({
            ...item,
            status: item.status === "PENDING_REVIEW" ? "PROOF_SUBMITTED" : item.status,
          }))
        : [];
      setRequests(normalized);
    } catch (err) {
      setError(
        "Could not load requests. Check that Spring Boot is running on port 8080. " +
          err.message
      );
    }
  }

  function setField(name, value) {
    setForm((previous) => ({ ...previous, [name]: value }));
  }

  function clearNotices() {
    setError("");
    setMessage("");
  }

  function navigate(nextPage) {
    clearNotices();
    setPage(nextPage);
  }

  async function handleLogin(event) {
    event.preventDefault();
    clearNotices();

    const email = loginEmail.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    if (!loginPassword || loginPassword.length > 72) {
      setError("Enter your password (maximum 72 characters).");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: loginPassword }),
      });
      if (!response.ok) throw new Error(await getErrorMessage(response));
      const result = await response.json();
      const nextUser = {
        id: result.id,
        name: result.fullName,
        email: result.email,
        phone: "",
        location: "",
        bio: "",
        photo: "",
      };
      localStorage.setItem("pbp_user", JSON.stringify(nextUser));
      setUser(nextUser);
      setProfileForm(nextUser);
      setPage("dashboard");
      setLoginPassword("");
      setMessage(result.message || "Welcome to ProofBeforePay!");
    } catch (err) {
      const loginMessage = (err.message || "").toLowerCase();
      setError(loginMessage.includes("unauthorized") || loginMessage.includes("invalid email or password") || loginMessage.includes("401")
        ? "Invalid email or password."
        : err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleRegister(event) {
    event.preventDefault();
    clearNotices();

    const fullName = registerName.trim();
    const email = registerEmail.trim().toLowerCase();

    if (fullName.length < 2 || fullName.length > 100) {
      setError("Name must contain between 2 and 100 characters.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
      setError("Enter a valid email address (maximum 254 characters).");
      return;
    }
    if (registerPassword.length < 8 || registerPassword.length > 72 ||
        !/(?=.*[A-Za-z])(?=.*\d)/.test(registerPassword)) {
      setError("Password must be 8–72 characters and include at least one letter and one number.");
      return;
    }
    if (registerPassword !== registerConfirm) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password: registerPassword }),
      });
      if (!response.ok) throw new Error(await getErrorMessage(response));
      const result = await response.json();
      setRegisterName("");
      setRegisterEmail("");
      setRegisterPassword("");
      setRegisterConfirm("");
      setPage("login");
      setLoginEmail(email);
      setMessage(result.message || "Account created successfully. Please sign in.");
    } catch (err) {
      setError(err.message || "Account creation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleProfilePhoto(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("Please choose an image file.");
      event.target.value = "";
      return;
    }
    if (file.size > 1024 * 1024) {
      setError("Profile photo must be 1 MB or smaller.");
      event.target.value = "";
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setProfileForm((previous) => ({ ...previous, photo: String(reader.result) }));
    reader.onerror = () => setError("Could not read this photo. Please try another image.");
    reader.readAsDataURL(file);
    event.target.value = "";
  }

  function saveProfile(event) {
    event.preventDefault();
    clearNotices();
    if (profileForm.name.trim().length < 2) {
      setError("Full name must contain at least 2 characters.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profileForm.email.trim())) {
      setError("Enter a valid email address.");
      return;
    }
    const updatedUser = { ...user, ...profileForm, name: profileForm.name.trim(), email: profileForm.email.trim().toLowerCase() };
    localStorage.setItem("pbp_user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setProfileForm(updatedUser);
    setMessage("Your profile has been updated.");
  }

  async function changePassword(event) {
    event.preventDefault();
    clearNotices();
    if (!changeCurrentPassword) { setError("Enter your current password."); return; }
    if (changeNewPassword.length < 8 || changeNewPassword.length > 72 || !/(?=.*[A-Za-z])(?=.*\d)/.test(changeNewPassword)) {
      setError("New password must be 8–72 characters and include at least one letter and one number."); return;
    }
    if (changeNewPassword !== changeConfirmPassword) { setError("New passwords do not match."); return; }
    setChangingPassword(true);
    try {
      const response = await fetch("http://localhost:8080/api/auth/change-password", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email, currentPassword: changeCurrentPassword, newPassword: changeNewPassword }),
      });
      if (!response.ok) throw new Error(await getErrorMessage(response));
      setChangeCurrentPassword(""); setChangeNewPassword(""); setChangeConfirmPassword("");
      setMessage("Password changed successfully.");
    } catch (err) {
      const msg = (err.message || "").toLowerCase();
      setError(msg.includes("unauthorized") || msg.includes("invalid email or current password") || msg.includes("401")
        ? "Your current password is incorrect." : err.message || "Could not change password. Please try again.");
    } finally { setChangingPassword(false); }
  }

  function logout() {
    localStorage.removeItem("pbp_user");
    setUser(null);
    setPage("login");
    setRequests([]);
    setMessage("");
    setError("");
  }

  function handlePhotoChange(event) {
    clearNotices();
    setPhotoError("");
    const selected = Array.from(event.target.files || []);
    if (!selected.length) return;

    const combined = [...photos, ...selected];
    if (combined.length > PHOTO_LIMIT) {
      setPhotoError(`You can select a maximum of ${PHOTO_LIMIT} photos.`);
      event.target.value = "";
      return;
    }

    const invalidType = combined.find(
      (file) => !["image/jpeg", "image/png", "image/webp"].includes(file.type)
    );
    if (invalidType) {
      setPhotoError("Only JPG, PNG, or WEBP image files are allowed.");
      event.target.value = "";
      return;
    }

    const oversized = combined.find((file) => file.size > PHOTO_SIZE_LIMIT);
    if (oversized) {
      setPhotoError("Each photo must be 2 MB or smaller.");
      event.target.value = "";
      return;
    }

    setPhotos(combined);
    event.target.value = "";
  }

  function removePhoto(index) {
    setPhotos((previous) => previous.filter((_, photoIndex) => photoIndex !== index));
  }

  async function createRequest(event) {
    event.preventDefault();
    clearNotices();

    if (!form.title.trim() || !form.requesterName.trim() || !form.receiverName.trim()) {
      setError("Please complete all required fields.");
      return;
    }
    if (!Number.isFinite(Number(form.amount)) || Number(form.amount) <= 0) {
      setError("Amount must be greater than zero.");
      return;
    }
    if (form.description.trim().length < 3 || form.description.trim().length > 1000) {
      setError("Description must contain between 3 and 1000 characters.");
      return;
    }
    const combinedDescription = [
      form.description.trim(),
      form.proofType ? `Proof type: ${form.proofType}` : "",
      form.priority ? `Priority: ${form.priority}` : "",
      form.dueDate ? `Due date: ${form.dueDate}` : "",
      form.proofDescription.trim()
        ? `Proof required: ${form.proofDescription.trim()}`
        : "",
    ].filter(Boolean).join("\n");
    if (combinedDescription.length > 1000) {
      setError("The description and proof details together cannot exceed 1000 characters.");
      return;
    }
    if (photoError) {
      setError(photoError);
      return;
    }

    setLoading(true);
    try {
      // These fields match the current Spring Boot CreatePaymentRequest DTO.
      const response = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: form.title.trim(),
          amount: Number(form.amount),
          description: combinedDescription,
          requesterName: form.requesterName.trim(),
          receiverName: form.receiverName.trim(),
        }),
      });

      if (!response.ok) throw new Error(await getErrorMessage(response));

      // Current backend accepts text details only; photo files are previewed here,
      // but require a multipart upload endpoint to persist on the server.
      setForm(emptyRequest);
      setPhotos([]);
      setPhotoError("");
      setMessage(
        photos.length
          ? "Request created. Photo previews were selected, but server photo upload needs a backend upload endpoint."
          : "Payment request created successfully!"
      );
      await loadRequests();
      setPage("my-requests");
    } catch (err) {
      setError("Create request failed: " + err.message);
    } finally {
      setLoading(false);
    }
  }

  async function submitProof(id) {
    const proofDetails = (proofInputs[id] || "").trim();
    if (proofDetails.length < 3) {
      setError("Enter proof details (at least 3 characters) before submitting.");
      return;
    }
    clearNotices();
    try {
      const response = await fetch(`${API}/${id}/proof`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ proofDetails }),
      });
      if (!response.ok) throw new Error(await getErrorMessage(response));
      setProofInputs((previous) => ({ ...previous, [id]: "" }));
      setMessage("Proof details submitted successfully!");
      await loadRequests();
    } catch (err) {
      setError("Proof submission failed: " + err.message);
    }
  }

  async function reviewRequest(id, status) {
    const reviewComment = (reviewInputs[id] || "").trim();
    clearNotices();
    try {
      const response = await fetch(`${API}/${id}/review`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ decision: status, reviewComment }),
      });
      if (!response.ok) throw new Error(await getErrorMessage(response));
      setReviewInputs((previous) => ({ ...previous, [id]: "" }));
      setMessage(`Request ${status.toLowerCase()} successfully.`);
      await loadRequests();
    } catch (err) {
      setError("Review failed: " + err.message);
    }
  }

  const filteredRequests = useMemo(() => {
    const query = search.trim().toLowerCase();
    return requests.filter((request) => {
      const matchesSearch =
        !query ||
        [request.title, request.receiverName, request.requesterName, request.description]
          .some((value) => String(value || "").toLowerCase().includes(query));
      const matchesStatus = statusFilter === "ALL" || request.status === statusFilter;
      const matchesPending =
        page !== "pending" ||
        ["PENDING_PROOF", "PROOF_SUBMITTED"].includes(request.status);
      const matchesReview = page !== "verify" || request.status === "PROOF_SUBMITTED";
      return matchesSearch && matchesStatus && matchesPending && matchesReview;
    });
  }, [requests, search, statusFilter, page]);

  const counts = useMemo(
    () => ({
      total: requests.length,
      pending: requests.filter((item) => item.status === "PENDING_PROOF").length,
      submitted: requests.filter((item) => item.status === "PROOF_SUBMITTED").length,
      approved: requests.filter((item) => item.status === "APPROVED").length,
      rejected: requests.filter((item) => item.status === "REJECTED").length,
    }),
    [requests]
  );

  function statusClass(status) {
    return String(status || "PENDING_PROOF").toLowerCase().replaceAll("_", "-");
  }

  function pageTitle() {
    return {
      dashboard: ["Your payment workspace", "Dashboard"],
      create: ["Start with clear expectations", "Create Request"],
      requests: ["Everything in one place", "My Requests"],
      pending: ["Requests that need attention", "Pending Requests"],
      verify: ["Review submitted evidence", "Verify Proof"],
      status: ["Understand every decision", "Payment Status"],
      profile: ["Manage your personal information", "My Profile"],
    }[page] || ["Your payment workspace", "Dashboard"];
  }

  if (!user || page === "login" || page === "register") {
    return (
      <div className="auth-screen">
        <div className="auth-visual">
          <div className="auth-brand">
            <span className="brand-mark">✓</span>
            <span>Proof<span className="brand-highlight">BeforePay</span></span>
          </div>
          <div className="auth-copy">
            <p className="eyebrow light">{t("VERIFY BEFORE YOU PAY")}</p>
            <h1>{t("Confidence starts with ")}<em>{t("proof.")}</em></h1>
            <p>{t("Organize payment requests, review evidence, and make clearer decisions before money changes hands.")}</p>
            <div className="auth-benefits">
              <div><span>✓</span><div><strong>{t("Proof-first workflow")}</strong><small>{t("Keep evidence close to every request.")}</small></div></div>
              <div><span>✓</span><div><strong>{t("Clear decisions")}</strong><small>{t("Track pending, approved, and rejected items.")}</small></div></div>
              <div><span>✓</span><div><strong>{t("One organized workspace")}</strong><small>{t("Stay on top of every payment request.")}</small></div></div>
            </div>
          </div>
          <div className="auth-footnote"><span className="shield">⌑</span> {t("Proof first. Payment next.")}</div>
          <div className="auth-orb orb-one" />
          <div className="auth-orb orb-two" />
        </div>

        <div className="auth-side">
          <div className="auth-language-switcher language-switcher">
            <label htmlFor="pbp-language-auth">{t("Language")}</label>
            <select id="pbp-language-auth" value={language} onChange={(event) => changeLanguage(event.target.value)} aria-label="Language">
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
              <option value="kn">ಕನ್ನಡ</option>
            </select>
          </div>
          <div className="auth-mobile-brand">
            <span className="brand-mark">✓</span>
            <span>Proof<span className="brand-highlight">BeforePay</span></span>
          </div>
          <div className="auth-card">
            <div className="auth-heading">
              <span className="auth-icon">{page === "register" ? "+" : "↗"}</span>
              <p className="eyebrow">{page === "register" ? t("GET STARTED") : t("WELCOME BACK")}</p>
              <h2>{page === "register" ? t("Create your account") : t("Good to see you.")}</h2>
              <p>{page === "register" ? t("Set up your workspace in a few steps.") : t("Sign in to continue to your payment workspace.")}</p>
            </div>

            {error && <div className="notice error-notice" role="alert">{error}</div>}
            {message && <div className="notice success-notice" role="status">{message}</div>}

            {page === "register" ? (
              <form className="auth-form" onSubmit={handleRegister}>
                <label htmlFor="registerName">{t("Full name")}</label>
                <input id="registerName" value={registerName} onChange={(e) => setRegisterName(e.target.value)} placeholder={t("e.g. Raja Patel")} autoComplete="name" minLength={2} maxLength={100} required />
                <label htmlFor="registerEmail">{t("Email address")}</label>
                <input id="registerEmail" type="email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} placeholder="you@example.com" autoComplete="email" maxLength={254} required />
                <label htmlFor="registerPassword">{t("Password")}</label>
                <div className="password-wrap">
                  <input id="registerPassword" type={showRegisterPassword ? "text" : "password"} value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} placeholder={t("At least 8 characters")} autoComplete="new-password" minLength={8} maxLength={72} required />
                  <button className="eye-button" type="button" onClick={() => setShowRegisterPassword((v) => !v)} aria-label={showRegisterPassword ? "Hide password" : "Show password"} title={showRegisterPassword ? "Hide password" : "Show password"}><EyeIcon visible={showRegisterPassword} /></button>
                </div>
                <small className="field-hint">{t("Use at least 8 characters, with a letter and a number.")}</small>
                <label htmlFor="registerConfirm">{t("Confirm password")}</label>
                <div className="password-wrap">
                  <input id="registerConfirm" type={showConfirmPassword ? "text" : "password"} value={registerConfirm} onChange={(e) => setRegisterConfirm(e.target.value)} placeholder={t("Re-enter your password")} autoComplete="new-password" minLength={8} maxLength={72} required />
                  <button className="eye-button" type="button" onClick={() => setShowConfirmPassword((v) => !v)} aria-label={showConfirmPassword ? "Hide password" : "Show password"} title={showConfirmPassword ? "Hide password" : "Show password"}><EyeIcon visible={showConfirmPassword} /></button>
                </div>
                <button className="btn btn-primary auth-submit" type="submit" disabled={loading}>{loading ? "Creating account..." : t("Create account")} <span>→</span></button>
                <p className="auth-switch">{t("Already have an account?")} <button type="button" onClick={() => { navigate("login"); setError(""); }}>{t("Sign in")}</button></p>
              </form>
            ) : (
              <form className="auth-form" onSubmit={handleLogin}>
                <label htmlFor="loginEmail">{t("Email address")}</label>
                <input id="loginEmail" type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} placeholder="you@example.com" autoComplete="email" maxLength={254} required />
                <label htmlFor="loginPassword">{t("Password")}</label>
                <div className="password-wrap">
                  <input id="loginPassword" type={showLoginPassword ? "text" : "password"} value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} placeholder="Enter your password" autoComplete="current-password" minLength={8} maxLength={72} required />
                  <button className="eye-button" type="button" onClick={() => setShowLoginPassword((v) => !v)} aria-label={showLoginPassword ? "Hide password" : "Show password"} title={showLoginPassword ? "Hide password" : "Show password"}><EyeIcon visible={showLoginPassword} /></button>
                </div>
                <div className="auth-mini-row"><span>✦ {t("Secure workspace")}</span><span>● {t("Secure workspace")}</span></div>
                <button className="btn btn-primary auth-submit" type="submit" disabled={loading}>{loading ? "Signing in..." : t("Sign in")} <span>→</span></button>
                <p className="auth-switch">{t("New to ProofBeforePay?")} <button type="button" onClick={() => { navigate("register"); setError(""); }}>{t("Create an account")}</button></p>
                <p className="demo-disclaimer">Your credentials are checked by the ProofBeforePay backend.</p>
              </form>
            )}
          </div>
          <p className="auth-copyright">© {new Date().getFullYear()} ProofBeforePay · Built for clearer payment decisions</p>
        </div>
      </div>
    );
  }

  const [eyebrow, title] = pageTitle();

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <button className="brand brand-button" onClick={() => navigate("dashboard")} aria-label="Go to dashboard">
          <span className="brand-mark">✓</span><span>Proof<span className="brand-highlight">BeforePay</span></span>
        </button>
        <div className="sidebar-caption">{t("WORKSPACE")}</div>
        <nav className="side-nav" aria-label="Main navigation">
          <NavItem icon="⌂" label={t("Dashboard")} active={page === "dashboard"} onClick={() => navigate("dashboard")} />
          <NavItem icon="＋" label={t("Create Request")} active={page === "create"} onClick={() => navigate("create")} />
          <NavItem icon="▤" label={t("My Requests")} active={page === "requests"} onClick={() => navigate("requests")} />
          <NavItem icon="◷" label={t("Pending Requests")} active={page === "pending"} count={counts.pending + counts.submitted} onClick={() => navigate("pending")} />
          <NavItem icon="✓" label={t("Verify Proof")} active={page === "verify"} count={counts.submitted} onClick={() => navigate("verify")} />
          <NavItem icon="₹" label={t("Payment Status")} active={page === "status"} onClick={() => navigate("status")} />
          <NavItem icon="◎" label={t("My Profile")} active={page === "profile"} onClick={() => { setProfileForm({ name: user.name || "", email: user.email || "", phone: user.phone || "", location: user.location || "", bio: user.bio || "", photo: user.photo || "" }); navigate("profile"); }} />
        </nav>
        <div className="sidebar-bottom-card">
          <div className="sidebar-shield">⌑</div>
          <strong>{t("Proof comes first.")}</strong>
          <p>{t("Review evidence before making a payment decision.")}</p>
        </div>
        <button className="logout-button" onClick={logout}><span>↪</span> {t("Sign out")}</button>
      </aside>

      <main className="main-area">
        <header className="top-header">
          <div className="mobile-brand"><span className="brand-mark">✓</span> Proof<span className="brand-highlight">BeforePay</span></div>
          <div className="breadcrumbs"><span>{t("Workspace")}</span><span className="crumb-slash">/</span><strong>{title}</strong></div>
          <div className="header-right">
            <div className="language-switcher">
              <label htmlFor="pbp-language">{t("Language")}</label>
              <select id="pbp-language" value={language} onChange={(event) => changeLanguage(event.target.value)} aria-label="Language">
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="kn">ಕನ್ನಡ</option>
              </select>
            </div>
            <button className="icon-button" onClick={loadRequests} title={t("Refresh requests")} aria-label={t("Refresh requests")}>↻</button>
            <button className="user-chip user-chip-button" onClick={() => { setProfileForm({ name: user.name || "", email: user.email || "", phone: user.phone || "", location: user.location || "", bio: user.bio || "", photo: user.photo || "" }); navigate("profile"); }} title={t("Open your profile")}>{user.photo ? <img className="avatar avatar-photo" src={user.photo} alt={t("Profile")} /> : <span className="avatar">{(user.name || "U").slice(0, 1).toUpperCase()}</span>}<span className="user-chip-copy"><strong>{user.name}</strong><small>{user.email}</small></span></button>
          </div>
        </header>

        <div className="page-content">
          {error && <div className="notice error-notice" role="alert"><span>!</span><div>{error}</div><button onClick={() => setError("")} aria-label="Dismiss error">×</button></div>}
          {message && <div className="notice success-notice" role="status"><span>✓</span><div>{message}</div><button onClick={() => setMessage("")} aria-label="Dismiss message">×</button></div>}

          {page === "dashboard" && (
            <>
              <section className="page-heading">
                <div><p className="eyebrow">{eyebrow}</p><h1>{t("Make every payment")} <span>{t("with confidence.")}</span></h1><p className="page-subtitle">{t("Your proof-first payment verification workspace.")}</p></div>
                <button className="btn btn-primary" onClick={() => navigate("create")}>＋ Create request</button>
              </section>
              <section className="stat-grid">
                <StatCard label={t("Total requests")} value={counts.total} icon="▤" tone="green" detail={t("All tracked requests")} />
                <StatCard label={t("Awaiting proof")} value={counts.pending} icon="◷" tone="amber" detail={t("Evidence not submitted")} />
                <StatCard label={t("Ready to review")} value={counts.submitted} icon="⌕" tone="blue" detail={t("Proof submitted")} />
                <StatCard label={t("Approved")} value={counts.approved} icon="✓" tone="purple" detail={t("Verified successfully")} />
              </section>
              <section className="dashboard-grid">
                <article className="surface welcome-panel">
                  <div className="welcome-copy"><p className="eyebrow light">{t("YOUR CONTROL CENTER")}</p><h2>{t("Proof first.")}<br />{t("Payment next.")}</h2><p>{t("Keep payment expectations clear, evidence organized, and decisions easy to follow.")}</p><button className="btn btn-white" onClick={() => navigate("create")}>{t("Start a request")} <span>→</span></button></div>
                  <div className="welcome-art" aria-hidden="true"><div className="art-ring ring-one" /><div className="art-ring ring-two" /><div className="art-check">✓</div><div className="art-dot dot-one" /><div className="art-dot dot-two" /></div>
                </article>
                <article className="surface quick-panel">
                  <div className="section-title"><div><p className="eyebrow">{t("SHORTCUTS")}</p><h2>{t("Quick actions")}</h2></div><span className="section-symbol">↗</span></div>
                  <QuickAction icon="＋" title={t("Create a request")} detail={t("Set payment expectations")} onClick={() => navigate("create")} />
                  <QuickAction icon="✓" title={t("Review proof")} detail={`${counts.submitted} request(s) ready`} onClick={() => navigate("verify")} />
                  <QuickAction icon="▤" title={t("Browse requests")} detail={t("Search and filter records")} onClick={() => navigate("requests")} />
                </article>
              </section>
              <section className="surface recent-surface">
                <div className="section-title"><div><p className="eyebrow">LATEST ACTIVITY</p><h2>Recent requests</h2></div><button className="text-button" onClick={() => navigate("requests")}>View all →</button></div>
                {requests.length === 0 ? <EmptyState title="Your workspace is ready" detail="Create your first request to see it appear here." action="Create a request" onAction={() => navigate("create")} /> : <RequestTable requests={requests.slice(0, 5)} statusClass={statusClass} proofInputs={proofInputs} setProofInputs={setProofInputs} reviewInputs={reviewInputs} setReviewInputs={setReviewInputs} submitProof={submitProof} reviewRequest={reviewRequest} t={t} />}
              </section>
              <section className="steps-row">
                <div><span>01</span><strong>Create</strong><p>Describe the payment and proof required.</p></div>
                <div><span>02</span><strong>Collect</strong><p>Gather the evidence for the request.</p></div>
                <div><span>03</span><strong>Verify</strong><p>Review the proof before deciding.</p></div>
                <div><span>04</span><strong>Decide</strong><p>Track approval and payment status.</p></div>
              </section>
            </>
          )}

          {page === "create" && (
            <>
              <section className="page-heading"><div><p className="eyebrow">NEW VERIFICATION</p><h1>Create a <span>payment request.</span></h1><p className="page-subtitle">Define what needs to be verified before payment.</p></div><span className="step-pill">STEP 01 / 03</span></section>
              <form className="surface request-form" onSubmit={createRequest}>
                <div className="form-section-heading"><span>01</span><div><h2>Payment details</h2><p>Tell us the basics about this transaction.</p></div></div>
                <div className="form-grid">
                  <FormField label="Request title" required hint="Up to 120 characters"><input value={form.title} onChange={(e) => setField("title", e.target.value)} placeholder="e.g. Website development payment" maxLength={120} required /></FormField>
                  <FormField label="Amount (INR)" required><div className="amount-input"><span>₹</span><input type="number" value={form.amount} onChange={(e) => setField("amount", e.target.value)} placeholder="0.00" min="0.01" step="0.01" required /></div></FormField>
                  <FormField label="Requester name" required><input value={form.requesterName} onChange={(e) => setField("requesterName", e.target.value)} placeholder="Your name" minLength={2} maxLength={100} required /></FormField>
                  <FormField label="Receiver / seller" required><input value={form.receiverName} onChange={(e) => setField("receiverName", e.target.value)} placeholder="Person or business name" minLength={2} maxLength={100} required /></FormField>
                  <FormField label="Payment due date"><input type="date" value={form.dueDate} min={new Date().toISOString().slice(0, 10)} onChange={(e) => setField("dueDate", e.target.value)} /></FormField>
                  <FormField label={t("Priority")}><select value={form.priority} onChange={(e) => setField("priority", e.target.value)}><option>{t("Normal")}</option><option>High</option><option>Urgent</option></select></FormField>
                  <FormField label={t("Description")} required hint={`${form.description.length}/1000 characters`} wide><textarea value={form.description} onChange={(e) => setField("description", e.target.value)} placeholder="What are you paying for?" rows={3} maxLength={1000} minLength={3} required /></FormField>
                </div>
                <div className="form-section-heading section-gap"><span>02</span><div><h2>Proof requirements</h2><p>Specify the evidence you expect before payment.</p></div></div>
                <div className="form-grid">
                  <FormField label={t("Proof type")} required><select value={form.proofType} onChange={(e) => setField("proofType", e.target.value)} required><option value="">Select proof type</option><option>Delivery Proof</option><option>Work Completion</option><option>Invoice / Receipt</option><option>Identity Proof</option><option>Service Evidence</option><option>Other</option></select></FormField>
                  <FormField label="What should be proved?" required hint={`${form.proofDescription.length}/500 characters`} wide><textarea value={form.proofDescription} onChange={(e) => setField("proofDescription", e.target.value)} placeholder="Example: Show that the agreed work has been completed." rows={3} minLength={3} maxLength={500} required /></FormField>
                </div>
                <div className="form-section-heading section-gap"><span>03</span><div><h2>Proof photos</h2><p>Attach photo evidence now, or add it later when submitting proof.</p></div></div>
                <div className="upload-zone">
                  <input id="proofPhotos" type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={handlePhotoChange} hidden />
                  <div className="upload-icon">▧</div>
                  <div className="upload-copy"><strong>Add proof photos</strong><p>JPG, PNG or WEBP · Up to 5 photos · Maximum 2 MB each</p><label className="btn btn-outline upload-label" htmlFor="proofPhotos">＋ Choose photos</label></div>
                  <div className="upload-count">{photos.length}/{PHOTO_LIMIT}</div>
                </div>
                {photoError && <p className="field-error">{photoError}</p>}
                {photos.length > 0 && <div className="photo-preview-grid">{photos.map((photo, index) => <PhotoPreview key={`${photo.name}-${photo.size}-${index}`} file={photo} onRemove={() => removePhoto(index)} />)}</div>}
                {photos.length === 0 && <div className="photo-empty"><span>▧</span><div><strong>No photos selected yet</strong><p>Selected images will appear here for preview.</p></div></div>}
                <p className="upload-note">Note: the current backend accepts text proof only. These photos can be selected and previewed, but saving them to the server requires a backend photo-upload endpoint.</p>
                <div className="form-footer"><button type="button" className="btn btn-quiet" onClick={() => { setForm(emptyRequest); setPhotos([]); setPhotoError(""); clearNotices(); }}>Clear form</button><button className="btn btn-primary" type="submit" disabled={loading}>{loading ? "Creating request..." : "Create request →"}</button></div>
              </form>
            </>
          )}

          {(page === "requests" || page === "pending" || page === "verify") && (
            <>
              <section className="page-heading"><div><p className="eyebrow">{eyebrow}</p><h1>{title} <span>{page === "verify" ? "with confidence." : ""}</span></h1><p className="page-subtitle">{page === "pending" ? "Requests waiting for proof or review." : page === "verify" ? "Review submitted proof and make a decision." : "Search, filter, and manage your payment requests."}</p></div>{page === "requests" && <button className="btn btn-primary" onClick={() => navigate("create")}>＋ Create request</button>}</section>
              <section className="surface list-surface">
                <div className="list-toolbar"><div className="search-field"><span>⌕</span><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search title, requester, or receiver..." /></div><select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}><option value="ALL">All statuses</option><option value="PENDING_PROOF">Pending proof</option><option value="PROOF_SUBMITTED">{t("Proof submitted")}</option><option value="APPROVED">{t("Approved")}</option><option value="REJECTED">{t("Rejected")}</option></select><button className="btn btn-outline" onClick={loadRequests}>↻ Refresh</button></div>
                {filteredRequests.length === 0 ? <EmptyState title="No matching requests" detail={requests.length ? "Try changing the search or status filter." : "Create a request to get started."} action={requests.length ? "Clear filters" : "Create request"} onAction={() => requests.length ? (setSearch(""), setStatusFilter("ALL")) : navigate("create")} /> : <RequestTable requests={filteredRequests} statusClass={statusClass} proofInputs={proofInputs} setProofInputs={setProofInputs} reviewInputs={reviewInputs} setReviewInputs={setReviewInputs} submitProof={submitProof} reviewRequest={reviewRequest} t={t} />}
              </section>
            </>
          )}

          {page === "profile" && (
            <>
              <section className="page-heading"><div><p className="eyebrow">YOUR ACCOUNT</p><h1>My <span>profile.</span></h1><p className="page-subtitle">Keep your personal details up to date.</p></div><button className="btn btn-outline" onClick={logout}>↪ Sign out</button></section>
              <form className="surface profile-form" onSubmit={saveProfile}>
                <div className="profile-cover"><div className="profile-cover-orb" /><p>PROOFBEFOREPAY ACCOUNT</p><h2>Your identity, all in one place.</h2><span>Personal information and account details</span></div>
                <div className="profile-body">
                  <div className="profile-photo-section">
                    <div className="profile-photo-large">{profileForm.photo ? <img src={profileForm.photo} alt="Your profile" /> : <span>{(profileForm.name || "U").slice(0, 1).toUpperCase()}</span>}</div>
                    <div className="profile-photo-copy"><strong>Profile photo</strong><p>JPG, PNG, or another image format. Maximum size 1 MB.</p><label className="btn btn-outline profile-upload">{t("Upload photo")}<input type="file" accept="image/*" onChange={handleProfilePhoto} /></label>{profileForm.photo && <button className="profile-remove-photo" type="button" onClick={() => setProfileForm((previous) => ({ ...previous, photo: "" }))}>{t("Remove photo")}</button>}</div>
                  </div>
                  <div className="profile-divider" />
                  <div className="profile-section-title"><h3>Personal details</h3><p>These details are stored in this browser for the demo.</p></div>
                  <div className="form-grid profile-grid">
                    <FormField label={t("Full name")} required><input value={profileForm.name} onChange={(e) => setProfileForm((previous) => ({ ...previous, name: e.target.value }))} placeholder="Your full name" minLength={2} maxLength={100} required /></FormField>
                    <FormField label={t("Email address")} required><input type="email" value={profileForm.email} onChange={(e) => setProfileForm((previous) => ({ ...previous, email: e.target.value }))} placeholder="you@example.com" maxLength={254} required /></FormField>
                    <FormField label={t("Phone number")}><input type="tel" value={profileForm.phone} onChange={(e) => setProfileForm((previous) => ({ ...previous, phone: e.target.value }))} placeholder="e.g. 9876543210" maxLength={20} /></FormField>
                    <FormField label="City / location"><input value={profileForm.location} onChange={(e) => setProfileForm((previous) => ({ ...previous, location: e.target.value }))} placeholder="e.g. Bengaluru" maxLength={100} /></FormField>
                    <FormField label="About me" wide hint="Up to 250 characters"><textarea value={profileForm.bio} onChange={(e) => setProfileForm((previous) => ({ ...previous, bio: e.target.value }))} placeholder="A short introduction about yourself" maxLength={250} rows={4} /></FormField>
                  </div>
                  <div className="profile-actions"><button className="btn btn-outline" type="button" onClick={() => { setProfileForm({ name: user.name || "", email: user.email || "", phone: user.phone || "", location: user.location || "", bio: user.bio || "", photo: user.photo || "" }); clearNotices(); }}>Cancel changes</button><button className="btn btn-primary" type="submit">{t("Save profile")} <span>✓</span></button></div>
                </div>
              </form>
              <section className="surface profile-form password-change-card">
                <div className="profile-section-title"><h3>Change password</h3><p>Confirm your current password before setting a new one.</p></div>
                <form onSubmit={changePassword}>
                  <div className="form-grid profile-grid">
                    <FormField label="Current password" required><input type="password" autoComplete="current-password" value={changeCurrentPassword} onChange={(e) => setChangeCurrentPassword(e.target.value)} maxLength={72} required /></FormField>
                    <FormField label="New password" required hint="8–72 characters, at least one letter and one number"><input type="password" autoComplete="new-password" value={changeNewPassword} onChange={(e) => setChangeNewPassword(e.target.value)} minLength={8} maxLength={72} required /></FormField>
                    <FormField label="Confirm new password" required><input type="password" autoComplete="new-password" value={changeConfirmPassword} onChange={(e) => setChangeConfirmPassword(e.target.value)} minLength={8} maxLength={72} required /></FormField>
                  </div>
                  <div className="profile-actions"><button className="btn btn-primary" type="submit" disabled={changingPassword}>{changingPassword ? "Changing password..." : "Change password"}</button></div>
                </form>
              </section>
              <div className="notice info-notice"><span>i</span><div>Your profile details and photo are stored in this browser. Password changes are verified and saved by the backend.</div></div>
            </>
          )}

          {page === "status" && (
            <>
              <section className="page-heading"><div><p className="eyebrow">TRANSACTION CONTROL CENTER</p><h1>Payment <span>status.</span></h1><p className="page-subtitle">Track verification decisions for each request.</p></div><button className="btn btn-outline" onClick={loadRequests}>↻ Refresh</button></section>
              <section className="status-overview">
                <StatCard label="Requested amount" value={formatMoney(requests.reduce((sum, item) => sum + Number(item.amount || 0), 0))} icon="₹" tone="green" detail="Across all requests" />
                <StatCard label="Approved requests" value={counts.approved} icon="✓" tone="purple" detail="Ready for your decision" />
                <StatCard label={t("Awaiting proof")} value={counts.pending} icon="◷" tone="amber" detail="Not yet submitted" />
                <StatCard label={t("Rejected")} value={counts.rejected} icon="×" tone="rose" detail="Not approved" />
              </section>
              <section className="surface recent-surface"><div className="section-title"><div><p className="eyebrow">ALL TRANSACTIONS</p><h2>Verification history</h2></div></div>{requests.length ? <RequestTable requests={requests} statusClass={statusClass} proofInputs={proofInputs} setProofInputs={setProofInputs} reviewInputs={reviewInputs} setReviewInputs={setReviewInputs} submitProof={submitProof} reviewRequest={reviewRequest} t={t} /> : <EmptyState title="No transactions yet" detail="Your payment request history will appear here." action="Create request" onAction={() => navigate("create")} />}</section>
              <div className="notice info-notice"><span>i</span><div>Payment recording, partial balances, and PDF reports need additional backend endpoints. This page currently reflects request verification status and requested amounts.</div></div>
            </>
          )}
        </div>
        <footer className="app-footer"><span>© {new Date().getFullYear()} ProofBeforePay</span><span><i /> Your proof-first payment workspace</span></footer>
      </main>
    </div>
  );
}

function EyeIcon({ visible }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <path d="M2.5 12s3.2-6 9.5-6 9.5 6 9.5 6-3.2 6-9.5 6-9.5-6-9.5-6Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="2.8" stroke="currentColor" strokeWidth="1.7" />
      {!visible && <path d="M4 20 20 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />}
    </svg>
  );
}

function NavItem({ icon, label, active, count, onClick }) {
  return <button className={`nav-item ${active ? "active" : ""}`} onClick={onClick}><span className="nav-icon">{icon}</span><span>{label}</span>{count > 0 && <small>{count}</small>}</button>;
}

function StatCard({ label, value, icon, tone, detail }) {
  return <article className={`stat-card tone-${tone}`}><div className="stat-top"><span className="stat-icon">{icon}</span><span className="stat-indicator" /></div><p>{label}</p><h2>{value}</h2><small>{detail}</small></article>;
}

function QuickAction({ icon, title, detail, onClick }) {
  return <button className="quick-action" onClick={onClick}><span className="quick-icon">{icon}</span><span className="quick-text"><strong>{title}</strong><small>{detail}</small></span><span className="quick-arrow">↗</span></button>;
}

function FormField({ label, required, hint, wide, children }) {
  return <div className={`form-field ${wide ? "field-wide" : ""}`}><div className="field-label-row"><label>{label}{required && <span className="required-mark"> *</span>}</label>{hint && <small>{hint}</small>}</div>{children}</div>;
}

function PhotoPreview({ file, onRemove }) {
  const [src, setSrc] = useState("");
  useEffect(() => {
    const url = URL.createObjectURL(file);
    setSrc(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);
  return <div className="photo-preview">{src && <img src={src} alt={file.name} />}<div className="photo-overlay"><span title={file.name}>{file.name}</span><button type="button" onClick={onRemove} aria-label={`Remove ${file.name}`}>×</button></div><small>{(file.size / 1024 / 1024).toFixed(2)} MB</small></div>;
}

function RequestTable({ requests, statusClass, proofInputs, setProofInputs, reviewInputs, setReviewInputs, submitProof, reviewRequest, t }) {
  return (
    <div className="table-scroll">
      <table className="request-table">
        <thead>
          <tr><th>{t("Request")}</th><th>{t("Requester / receiver")}</th><th>Amount</th><th>{t("Status")}</th><th>{t("Created")}</th><th>{t("Action")}</th></tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>
                <strong>{request.title || "Untitled request"}</strong>
                <small className="table-subtitle">{request.description || "No description provided"}</small>
              </td>
              <td>
                <strong>{request.requesterName || "—"}</strong>
                <small className="table-subtitle">To: {request.receiverName || "—"}</small>
              </td>
              <td className="money-cell">{formatMoney(request.amount)}</td>
              <td><span className={`status-pill ${statusClass(request.status)}`}>{formatStatus(request.status)}</span></td>
              <td>{request.createdAt ? new Date(request.createdAt).toLocaleDateString("en-IN") : "—"}</td>
              <td>
                {request.status === "PENDING_PROOF" && (
                  <div className="table-workflow">
                    <textarea
                      aria-label={`Proof details for ${request.title}`}
                      value={proofInputs[request.id] || ""}
                      onChange={(event) => setProofInputs((previous) => ({ ...previous, [request.id]: event.target.value }))}
                      placeholder={t("Enter proof details")}
                      minLength={3}
                      maxLength={1000}
                      rows={2}
                    />
                    <button className="table-action" onClick={() => submitProof(request.id)}>Submit proof →</button>
                  </div>
                )}
                {request.status === "PROOF_SUBMITTED" && (
                  <div className="table-workflow">
                    <small className="table-subtitle"><strong>Proof:</strong> {request.proofDetails || "No proof details"}</small>
                    <textarea
                      aria-label={`Review comment for ${request.title}`}
                      value={reviewInputs[request.id] || ""}
                      onChange={(event) => setReviewInputs((previous) => ({ ...previous, [request.id]: event.target.value }))}
                      placeholder="Review comment (optional)"
                      maxLength={500}
                      rows={2}
                    />
                    <div className="table-review-buttons">
                      <button className="table-action" onClick={() => reviewRequest(request.id, "APPROVED")}>Approve</button>
                      <button className="table-action table-reject" onClick={() => reviewRequest(request.id, "REJECTED")}>Reject</button>
                    </div>
                  </div>
                )}
                {(request.status === "APPROVED" || request.status === "REJECTED") && <span className="completed-text">✓ Reviewed</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function EmptyState({ title, detail, action, onAction }) {
  return <div className="empty-state"><div className="empty-icon">✓</div><h3>{title}</h3><p>{detail}</p>{action && <button className="btn btn-outline" onClick={onAction}>{action} →</button>}</div>;
}

function formatMoney(value) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 2 }).format(Number(value || 0));
}

function formatStatus(status) {
  return String(status || "PENDING_PROOF").replaceAll("_", " ").toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export default App;
