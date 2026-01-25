import Modal from "@/components/modal";
import React from "react";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const ModalDetail = ({ isOpen, handleClose }: Props) => {
  return (
    <Modal isOpen={isOpen} className="max-w-xl">
      <div className="flex w-full justify-between px-4 py-3 border-b border-gray-200">
        <div className="relative space-y-1">
          <h3 className="text-lg font-semibold text-black dark:text-white">
            Syarat dan Ketentuan
          </h3>
        </div>
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={handleClose}
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>
      <div className="max-h-[70vh] overflow-y-auto px-5 py-4 text-sm text-gray-700 space-y-5">
        {/* A */}
        <section>
          <h3 className="font-semibold text-gray-900 mb-2">
            A. Pribadi/Perseorangan
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li>Minimal sewa 3 hari</li>
            <li>KTP Suami dan Istri</li>
            <li>Kartu Keluarga (KK)</li>
            <li>Rekening Listrik / Telpon Rumah</li>
            <li>PBB</li>
            <li>Tanda Bukti Kepemilikan Rumah</li>
            <li>Identitas Pegawai (ID Card Kantor)</li>
            <li>SIM yang masih berlaku</li>
            <li>Bersedia di Survey untuk verifikasi data</li>
            <li>Foto Dokumen asli wajib dikirim via email/whatsapp</li>
          </ol>
        </section>

        {/* B */}
        <section>
          <h3 className="font-semibold text-gray-900 mb-2">
            B. Perusahaan/Korporasi
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li>
              Minimal sewa 3 hari <br />
              <span className="text-gray-600">
                SIUP, NPWP, TDP, Surat Keterangan Domisili
              </span>
            </li>
            <li>NIB</li>
            <li>KTP Direktur & Manager</li>
            <li>SIM Supir</li>
            <li>Bersedia di Survey untuk verifikasi data</li>
            <li>Foto Dokumen asli wajib dikirim via email/whatsapp</li>
          </ol>
        </section>

        {/* C */}
        <section>
          <h3 className="font-semibold text-gray-900 mb-2">
            C. Ketentuan Lain
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li>
              Bersedia menandatangani surat perjanjian sewa menyewa mobil diatas
              materai
            </li>
            <li>Untuk pelanggan baru dikenakan biaya survey</li>
            <li>Bersedia membayar biaya tambahan antar dan jemput mobil</li>
          </ol>
        </section>
      </div>
    </Modal>
  );
};

export default ModalDetail;
