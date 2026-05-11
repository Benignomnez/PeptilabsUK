-- Clear existing products
delete from public.products;

-- REGENERACIÓN / SALUD
insert into public.products (name, description, price, stock, category, visible, featured) values
('Thymosin Alpha-1 10mg', 'Péptido inmunomodulador de alta pureza. Research grade >99%.', 9000, 20, 'Regeneración & Salud', true, false),
('BPC-157', 'Body Protection Compound-157. 15 aminoácidos. Research grade >99%.', 6000, 25, 'Regeneración & Salud', true, true),
('TB-500', 'Fragmento de Thymosin Beta-4. Research grade >98%.', 7000, 18, 'Regeneración & Salud', true, true),
('Wolverine Stack (TB500 + BPC157 10mg)', 'Combinación premium TB-500 + BPC-157 para máxima recuperación.', 9000, 15, 'Regeneración & Salud', true, true),
('Klow Stack (TB500 + BPC157 + GHKCU + KPV)', 'Stack completo de regeneración y bienestar.', 11000, 10, 'Regeneración & Salud', true, false),
('GHK-CU 50mg', 'Péptido cúprico de alta pureza. Regeneración y anti-aging.', 6500, 20, 'Regeneración & Salud', true, false),
('KPV', 'Tripéptido antiinflamatorio. Research grade.', 8000, 15, 'Regeneración & Salud', true, false),
('SS31 10mg', 'Péptido mitocondrial antioxidante. >98% pureza.', 7200, 12, 'Regeneración & Salud', true, false),
('LI-37 10mg', 'Péptido antimicrobiano inmunomodulador. Research grade.', 7200, 12, 'Regeneración & Salud', true, false),
('Epitalon 10mg', 'Tetrapéptido regulador de telómeros. >99% pureza.', 8000, 15, 'Regeneración & Salud', true, false),

-- HORMONALES / CRECIMIENTO
('IGF-1 (Factor de Crecimiento)', 'Insulin-like Growth Factor 1. Research grade >98%.', 8000, 15, 'Hormonales & Crecimiento', true, true),
('Tesamorelin 10mg', 'Análogo de GHRH. Estimulante de GH. >98% pureza.', 8500, 18, 'Hormonales & Crecimiento', true, false),
('Tesamorelin + Ipamorelin 6mg', 'Stack hormonal premium para optimización de GH.', 10000, 10, 'Hormonales & Crecimiento', true, true),
('CJC-1295 DAC 10mg', 'Análogo GHRH de larga duración con Drug Affinity Complex.', 7800, 20, 'Hormonales & Crecimiento', true, true),
('CJC-1295 No DAC 5mg', 'Análogo GHRH de acción corta. >98% pureza.', 8500, 15, 'Hormonales & Crecimiento', true, false),
('Sermorelin 10mg', 'Secretagogo de hormona de crecimiento. Research grade.', 9000, 15, 'Hormonales & Crecimiento', true, false),
('MOD (Most) 10mg', 'Péptido modificado de acción hormonal. >98% pureza.', 7000, 12, 'Hormonales & Crecimiento', true, false),

-- PÉRDIDA DE GRASA / METABOLISMO
('Tirzepatide 10mg', 'Agonista dual GIP/GLP-1. Research grade >99%.', 11000, 30, 'Pérdida de Grasa & Metabolismo', true, true),
('Tirzepatide 20mg', 'Agonista dual GIP/GLP-1 20mg. Research grade.', 18000, 25, 'Pérdida de Grasa & Metabolismo', true, true),
('Tirzepatide 30mg', 'Agonista dual GIP/GLP-1 30mg. Research grade.', 33000, 15, 'Pérdida de Grasa & Metabolismo', true, false),
('Tirzepatide 40mg', 'Agonista dual GIP/GLP-1 40mg. Research grade.', 36000, 10, 'Pérdida de Grasa & Metabolismo', true, false),
('Tirzepatide 60mg', 'Agonista dual GIP/GLP-1 60mg. Research grade.', 45000, 8, 'Pérdida de Grasa & Metabolismo', true, false),
('Retatrutide 10mg', 'Agonista triple GLP-1/GIP/Glucagón. Research grade.', 11000, 20, 'Pérdida de Grasa & Metabolismo', true, true),
('Retatrutide 20mg', 'Agonista triple 20mg. Research grade >99%.', 18000, 15, 'Pérdida de Grasa & Metabolismo', true, false),
('Retatrutide 40mg', 'Agonista triple 40mg. NUEVO. Research grade.', 36000, 10, 'Pérdida de Grasa & Metabolismo', true, false),
('Cagrilitide 10mg', 'Análogo de amilina de nueva generación. >98% pureza.', 11500, 12, 'Pérdida de Grasa & Metabolismo', true, false),
('AOD-9604 10mg', 'Fragmento de HGH para quema de grasa. Research grade.', 9000, 20, 'Pérdida de Grasa & Metabolismo', true, false),
('Semaglutide 10mg', 'Agonista GLP-1. Research grade >99%.', 9000, 25, 'Pérdida de Grasa & Metabolismo', true, true),
('FE Semaglutide 10mg', 'Semaglutide formulación especial. Research grade.', 9000, 15, 'Pérdida de Grasa & Metabolismo', true, false),

-- ESTÉTICA / ANTI-AGING
('NAD+ 500mg', 'Nicotinamida Adenina Dinucleótido. Energía celular y anti-aging.', 7500, 20, 'Estética & Anti-Aging', true, true),
('Glutatión 1500mg', 'Antioxidante maestro. Blanqueamiento y detox celular.', 7500, 20, 'Estética & Anti-Aging', true, false),
('Glow 70mg', 'Fórmula estética premium para luminosidad y rejuvenecimiento.', 9500, 15, 'Estética & Anti-Aging', true, false),
('Glow 80mg', 'Fórmula estética avanzada. Mayor concentración.', 10000, 12, 'Estética & Anti-Aging', true, false),

-- COGNICIÓN / PERFORMANCE
('P21 (10mg x10)', 'Péptido nootrópico para neuroplasticidad. Pack 10 unidades.', 9500, 15, 'Cognición & Performance', true, false),
('PE-22-28 10mg', 'Análogo de espiradina. Nootrópico de nueva generación.', 8000, 12, 'Cognición & Performance', true, false),
('PCN 27mg', 'Péptido de cognición y neuroregeneración. Research grade.', 9000, 10, 'Cognición & Performance', true, false),

-- OTROS / ESPECIALES
('5 Amino 50mg', 'Complejo de 5 aminoácidos bioactivos. Research grade.', 8000, 15, 'Otros & Especiales', true, false),
('SLUPP 333 (10mg)', 'Péptido especializado de investigación avanzada.', 8000, 10, 'Otros & Especiales', true, false),
('PT-141 (Bremelanotide) 10mg', 'Agonista del receptor de melanocortina. Research grade.', 7000, 20, 'Otros & Especiales', true, false),
('DSIP 10mg', 'Delta Sleep Inducing Peptide. Regulación del sueño.', 7000, 15, 'Otros & Especiales', true, false),
('Follistatin 10mg', 'Inhibidor de miostatina. NUEVO. Research grade >98%.', 9800, 10, 'Otros & Especiales', true, false);
