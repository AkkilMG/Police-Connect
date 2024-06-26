/**
 * @author: @AkkilMG
 * @description: DBMS Project - Police Connect
 */

import React from 'react';
import MapComponent from '../../../components/inputs/mapping';

export const StepTwo: React.FC<Props>  = ({formData, setFormData}) => {
    return (
        <div className="w-full max-w-md">
            <h2 className="flex flex-row mb-6 text-2xl font-bold">Details of incident for reporting</h2>
            <form>
                <div className="mb-4">
                    <label className="block mb-2 font-bold text-gray-700 text-sl"> May I know a detailed description of the incident/crime? </label>
                    <textarea value={formData.EvidenceDesc} onChange={(e) => setFormData((formData: any) => ({...formData, EvidenceDesc: e.target.value}))} className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-lg shadow appearance-none h-28 focus:border-indigo-500 focus:shadow-lg focus:outline-none focus:ring-2" id="DescIncident" />
                </div>
                <div className="mb-6">
                    <span className="flex items-center justify-between mb-2 font-sans font-bold text-gray-700 text-sl">
                    Location of Incident
                    </span>
                    <div className="w-full px-3 py-2 mb-3 leading-tight shadow appearance-none focus:border-indifo-500 h-14 focus:outline-none focus:ring">
                        <MapComponent formData={formData} setFormData={setFormData} />;
                    </div>
                </div>
            </form>
        </div>
    );
};


interface Props {
    formData: any;
    setFormData: React.Dispatch<React.SetStateAction<any>>;
}
