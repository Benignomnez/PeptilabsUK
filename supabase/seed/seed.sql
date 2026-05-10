-- Sample peptide products for PeptiLabs UK
insert into public.products (name, description, price, stock, category, visible, featured) values
(
  'BPC-157',
  'Body Protection Compound-157. A pentadecapeptide composed of 15 amino acids. Research grade, >99% purity.',
  49.99, 25, 'Healing & Recovery', true, true
),
(
  'TB-500',
  'Thymosin Beta-4 fragment. Synthetic peptide derived from Thymosin Beta-4. Research grade, >98% purity.',
  59.99, 18, 'Healing & Recovery', true, true
),
(
  'Ipamorelin',
  'A selective growth hormone secretagogue and ghrelin receptor agonist. Research grade, >99% purity.',
  44.99, 30, 'Growth Hormone', true, false
),
(
  'CJC-1295 DAC',
  'Growth hormone releasing hormone analogue with Drug Affinity Complex for extended half-life. >98% purity.',
  54.99, 20, 'Growth Hormone', true, true
),
(
  'Melanotan II',
  'Synthetic analogue of the naturally occurring melanocortin peptide hormone alpha-MSH. >98% purity.',
  39.99, 15, 'Tanning & Libido', true, false
),
(
  'Selank',
  'Synthetic analogue of the human tetrapeptide tuftsin. Nootropic peptide. Research grade, >99% purity.',
  49.99, 12, 'Nootropic', true, false
),
(
  'Semax',
  'Synthetic peptide based on the adrenocorticotropic hormone (ACTH). Cognitive research peptide. >98% purity.',
  54.99, 10, 'Nootropic', true, false
),
(
  'PT-141 (Bremelanotide)',
  'Melanocortin receptor agonist derived from Melanotan II. Research grade, >98% purity.',
  44.99, 0, 'Tanning & Libido', true, false
);
