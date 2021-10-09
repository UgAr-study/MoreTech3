import React, { useState, useEffect, useCallback } from 'react';

async function GetAllDataSets() {

    const datasets = [];

    try {
        const response = await fetch('http://localhost:8080/index');
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }

        const data = await response.json();

        for (const set in data) {

            const fields = [];
            for (const field in set.fields) {

                const types = [];
                for (const t in field.type) {
                    types.push(t)
                }

                fields.push({
                    name: field.name,
                    type: types
                })
            }

            datasets.push({
                id: set.id,
                name: set.name,
                type: set.type,
                namespace: set.namespace,
                doc: set.doc,
                fields: fields
            });
        }
    } catch (error) {
        console.log(error.message);
    }

    return datasets;
}

export default GetAllDataSets;