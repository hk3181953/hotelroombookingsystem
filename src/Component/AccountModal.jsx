import React, { useState } from 'react';
import { Modal, Button } from 'flowbite-react';

const AccountModal = ({ isOpen, onClose, cardData }) => {




  return (
    <Modal show={isOpen} onClose={onClose}>
      <Modal.Header className='bg-blue-500'>
        Account Information
      </Modal.Header>
      <Modal.Body>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-400">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  {cardData.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  ${cardData.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${cardData.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {cardData.status}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button color="gray" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AccountModal;
