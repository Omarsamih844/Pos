import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import JsBarcode from 'jsbarcode';

const Receipt = () => {
    const generateReceipt = (order) => {
        try {
            // Validation des données
            if (!order) {
                throw new Error('Aucune commande fournie');
            }

            if (!order.items || !Array.isArray(order.items) || order.items.length === 0) {
                throw new Error('La commande ne contient aucun article');
            }

            const doc = new jsPDF({
                unit: 'cm',
                format: [7, 20]
            });

            // Configuration de base
            doc.setFont('helvetica');
            doc.setFontSize(10);
            const margin = 0.5;
            let yPos = margin;
            const lineHeight = 0.4;
            const width = 7 - (margin * 2);

            // En-tête du restaurant
            doc.setFontSize(12);
            doc.text('CAFÉ DU COIN', 3.5, yPos, { align: 'center' });
            yPos += lineHeight;
            doc.setFontSize(8);
            doc.text('123 Rue Principale, Casablanca', 3.5, yPos, { align: 'center' });
            yPos += lineHeight;
            doc.text('Tél : +212 6 12 34 56 78', 3.5, yPos, { align: 'center' });
            yPos += lineHeight * 2;

            // Ligne de séparation
            doc.line(margin, yPos, 7 - margin, yPos);
            yPos += lineHeight;

            // Informations de la commande
            const now = new Date();
            const dateStr = now.toLocaleDateString('fr-FR');
            const timeStr = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
            
            doc.text(`Date : ${dateStr}  Heure : ${timeStr}`, margin, yPos);
            yPos += lineHeight;
            doc.text(`Caissier : ${order.cashier || 'Non spécifié'}`, margin, yPos);
            yPos += lineHeight;

            // Ligne de séparation
            doc.line(margin, yPos, 7 - margin, yPos);
            yPos += lineHeight;

            // En-tête des articles
            doc.text('Article', margin, yPos);
            doc.text('Qté', 4.5, yPos, { align: 'center' });
            doc.text('Total', 7 - margin, yPos, { align: 'right' });
            yPos += lineHeight;

            // Ligne de séparation
            doc.line(margin, yPos, 7 - margin, yPos);
            yPos += lineHeight;

            // Articles
            order.items.forEach(item => {
                if (!item.name || !item.quantity || !item.unit_price) {
                    console.warn('Article invalide détecté:', item);
                    return;
                }

                // Nom de l'article (limité à 15 caractères)
                const name = item.name.length > 15 ? item.name.substring(0, 12) + '...' : item.name;
                doc.text(name, margin, yPos);
                doc.text(`x${item.quantity}`, 4.5, yPos, { align: 'center' });
                doc.text(`${(item.quantity * item.unit_price).toFixed(2)}`, 7 - margin, yPos, { align: 'right' });
                yPos += lineHeight;
            });

            // Ligne de séparation
            doc.line(margin, yPos, 7 - margin, yPos);
            yPos += lineHeight;

            // Total
            doc.setFontSize(10);
            doc.text('Total TTC', margin, yPos);
            doc.text(`${order.total.toFixed(2)} MAD`, 7 - margin, yPos, { align: 'right' });
            yPos += lineHeight * 2;

            // Mode de paiement
            const paymentMethod = order.payment?.method === 'cash' ? 'Espèces' : 'Carte bancaire';
            doc.text(`Mode de paiement : ${paymentMethod}`, margin, yPos);
            yPos += lineHeight * 2;

            // Message de remerciement
            doc.setFontSize(10);
            doc.text('Merci pour votre visite ! ☕', 3.5, yPos, { align: 'center' });
            yPos += lineHeight;

            // Ligne de séparation finale
            doc.line(margin, yPos, 7 - margin, yPos);

            // Ajuster la hauteur finale
            doc.internal.pageSize.height = yPos + margin * 2;

            // Sauvegarder le PDF
            doc.save(`ticket-${order.id || 'temp'}.pdf`);
            console.log('Ticket généré avec succès');
            return true;
        } catch (error) {
            console.error('Erreur lors de la génération du ticket:', error);
            throw new Error(`Erreur lors de la génération du ticket: ${error.message}`);
        }
    };

    return { generateReceipt };
};

export default Receipt; 