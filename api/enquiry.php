<?php
// Vertex Global Tech - enquiry endpoint
// Configure SMTP/database delivery before production. This starter validates and logs submissions.
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405); echo json_encode(['success'=>false,'message'=>'Method not allowed.']); exit;
}
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) { http_response_code(400); echo json_encode(['success'=>false,'message'=>'Invalid request.']); exit; }
function clean_value($v, $max=2000) { return mb_substr(trim(strip_tags((string)$v)), 0, $max); }
$name = clean_value($data['name'] ?? '', 120);
$business = clean_value($data['business'] ?? '', 160);
$phone = clean_value($data['phone'] ?? '', 30);
$email = filter_var(trim((string)($data['email'] ?? '')), FILTER_VALIDATE_EMAIL);
$type = clean_value($data['website_type'] ?? '', 100);
$budget = clean_value($data['budget'] ?? '', 100);
$requirements = clean_value($data['requirements'] ?? '', 3000);
$consent = ($data['consent'] ?? '') === 'yes';
if (mb_strlen($name) < 2 || !preg_match('/^[0-9+()\-\s]{8,18}$/', $phone) || !$email || !$consent) {
  http_response_code(422); echo json_encode(['success'=>false,'message'=>'Please check the required fields and consent.']); exit;
}
$record = [
  'received_at' => gmdate('c'), 'name' => $name, 'business' => $business,
  'phone' => $phone, 'email' => $email, 'website_type' => $type,
  'budget' => $budget, 'requirements' => $requirements
];
$logDir = __DIR__ . '/../private';
if (!is_dir($logDir) && !mkdir($logDir, 0750, true)) {
  http_response_code(500); echo json_encode(['success'=>false,'message'=>'Unable to save enquiry right now. Please contact us by phone or email.']); exit;
}
$logFile = $logDir . '/enquiries.jsonl';
$fp = fopen($logFile, 'ab');
if (!$fp) { http_response_code(500); echo json_encode(['success'=>false,'message'=>'Unable to save enquiry right now.']); exit; }
if (flock($fp, LOCK_EX)) { fwrite($fp, json_encode($record, JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES) . PHP_EOL); fflush($fp); flock($fp, LOCK_UN); }
fclose($fp);
// Add a configured transactional email/CRM integration here. Do not expose SMTP credentials in React.
echo json_encode(['success'=>true,'message'=>'Enquiry received.']);
