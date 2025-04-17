import React from 'react';
import { jsPDF } from 'jspdf';
import JsBarcode from 'jsbarcode';

const Receipt = () => {
    const generateReceipt = (order) => {
        try {
            const doc = new jsPDF();
            let y = 15;
            const pageWidth = doc.internal.pageSize.getWidth();
            const margin = 15;

            // Header
            doc.setFontSize(16);
            doc.setFont('helvetica', 'bold');
            doc.text('BURGER HOUSE', pageWidth / 2, y, { align: 'center' });
            
            y += 10;
            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');
            doc.text('123 Main Street, City', pageWidth / 2, y, { align: 'center' });
            y += 5;
            doc.text('Tel: +1234567890', pageWidth / 2, y, { align: 'center' });
            y += 5;
            doc.text('www.burgerhouse.com', pageWidth / 2, y, { align: 'center' });

            // Divider
            y += 10;
            doc.setDrawColor(200, 200, 200);
            doc.line(margin, y, pageWidth - margin, y);

            // Order Information
            y += 10;
            doc.setFontSize(10);
            doc.text(`Order #: ${order.id}`, margin, y);
            doc.text(`Date: ${order.timestamp}`, pageWidth - margin, y, { align: 'right' });
            
            y += 5;
            doc.text(`Type: ${order.type.charAt(0).toUpperCase() + order.type.slice(1)}`, margin, y);
            if (order.table_number) {
                doc.text(`Table: ${order.table_number}`, pageWidth - margin, y, { align: 'right' });
            }
            
            y += 5;
            doc.text(`Server: ${order.server || 'John Doe'}`, margin, y);

            // Items Table Header
            y += 10;
            doc.setFont('helvetica', 'bold');
            doc.setFillColor(102, 51, 153);
            doc.setTextColor(255, 255, 255);
            doc.rect(margin, y - 5, pageWidth - (2 * margin), 7, 'F');
            
            const colWidths = [80, 20, 30, 30];
            let x = margin;
            doc.text('Item', x + 5, y);
            x += colWidths[0];
            doc.text('Qty', x + (colWidths[1] / 2), y, { align: 'center' });
            x += colWidths[1];
            doc.text('Price', x + (colWidths[2] / 2), y, { align: 'right' });
            x += colWidths[2];
            doc.text('Total', x + (colWidths[3] / 2), y, { align: 'right' });

            // Items Table Body
            y += 7;
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(0, 0, 0);
            
            order.items.forEach((item, index) => {
                if (index > 0) {
                    doc.setDrawColor(200, 200, 200);
                    doc.line(margin, y - 2, pageWidth - margin, y - 2);
                }
                
                x = margin;
                doc.text(item.name, x + 5, y);
                x += colWidths[0];
                doc.text(item.quantity.toString(), x + (colWidths[1] / 2), y, { align: 'center' });
                x += colWidths[1];
                doc.text(`${item.unit_price.toFixed(2)} DH`, x + (colWidths[2] / 2), y, { align: 'right' });
                x += colWidths[2];
                doc.text(`${(item.quantity * item.unit_price).toFixed(2)} DH`, x + (colWidths[3] / 2), y, { align: 'right' });
                
                y += 7;
            });

            // Totals
            y += 5;
            doc.setFontSize(10);
            doc.text('Subtotal:', pageWidth - margin - 75, y);
            doc.text(`${order.subtotal.toFixed(2)} DH`, pageWidth - margin, y, { align: 'right' });
            
            y += 7;
            doc.text('TVA (20%):', pageWidth - margin - 75, y);
            doc.text(`${order.tax.toFixed(2)} DH`, pageWidth - margin, y, { align: 'right' });
            
            if (order.type === 'delivery') {
                y += 7;
                doc.text('Delivery Fee (10%):', pageWidth - margin - 75, y);
                doc.text(`${(order.subtotal * 0.1).toFixed(2)} DH`, pageWidth - margin, y, { align: 'right' });
            }
            
            y += 7;
            doc.setFont('helvetica', 'bold');
            doc.text('TOTAL:', pageWidth - margin - 75, y);
            doc.text(`${order.total.toFixed(2)} DH`, pageWidth - margin, y, { align: 'right' });

            // Payment Information
            y += 15;
            doc.setFont('helvetica', 'normal');
            doc.text('Payment Method: Cash', margin, y);
            doc.text(`Amount Paid: ${order.payment.amount.toFixed(2)} DH`, pageWidth - margin, y, { align: 'right' });
            
            y += 5;
            if (order.payment.change > 0) {
                doc.text(`Change: ${order.payment.change.toFixed(2)} DH`, pageWidth - margin, y, { align: 'right' });
            }

            // Barcode
            y += 15;
            const canvas = document.createElement('canvas');
            JsBarcode(canvas, order.id, {
                format: 'CODE128',
                width: 2,
                height: 50,
                displayValue: true,
                fontSize: 12,
                font: 'Arial',
                textMargin: 2,
                background: '#FFFFFF',
                lineColor: '#000000',
                margin: 10
            });

            const barcodeWidth = 80;
            const barcodeX = (pageWidth - barcodeWidth) / 2;
            doc.addImage(canvas.toDataURL(), 'PNG', barcodeX, y, barcodeWidth, 25);

            // Thank you message
            y += 35;
            doc.setFontSize(10);
            doc.text('Thank you for your visit!', pageWidth / 2, y, { align: 'center' });
            y += 5;
            doc.setFontSize(8);
            doc.text('Please come again', pageWidth / 2, y, { align: 'center' });

            // Footer
            y = doc.internal.pageSize.getHeight() - 10;
            doc.setFontSize(8);
            doc.setTextColor(128, 128, 128);
            doc.text('www.burgerhouse.com | Follow us @burgerhouse', pageWidth / 2, y, { align: 'center' });

            // Save the PDF
            doc.save(`receipt-${order.id}.pdf`);
            console.log('Receipt generated successfully');
        } catch (error) {
            console.error('Error generating receipt:', error);
        }
    };

    return { generateReceipt };
};

export default Receipt; 